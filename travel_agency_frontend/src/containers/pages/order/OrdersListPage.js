import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as orderActions from '../../../actions/orderActions'

import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

function OrderView(props) {
	const tour = props.state.tours[props.order.tourID]
	if (tour == null) return null

	const hotel = props.state.hotels[tour.hotelID]
	if (hotel == null) return null

	const client = props.state.clients[props.order.clientID]
	if (client == null) return null

	return (
		<Paper elevation={3} style={{ padding: 16, marginBottom: 16, marginTop: 16, width: 400 }}>
			<div>
				<p>Order ID: {props.order.id}</p>
				<p>Tour ID: {tour.id}</p>
				<p>Client:
					<Chip
						size="small"
						label={client.familyName + " " + client.firstName + " " + client.middleName}
						component="a"
						clickable
						onClick={() => props.history.push(`/clients/${client.id}`)}
						style={{marginLeft: 5}}/>
				</p>
				<p>Hotel:
					<Chip
						size="small"
						label={hotel.hotelName}
						component="a"
						clickable
						onClick={() => props.history.push(`/hotels/${hotel.id}`)}
						style={{marginLeft: 5}}/>
				</p>
				<p>Departure date: {tour.departureDate}</p>
				<p>Nights: {tour.numberOfNights}</p>
				<p>Persons: {tour.numberOfPersons}</p>
				<p>Tour cost: {tour.tourCost}</p>
                <p>Date of issue: {props.order.dateOfIssue}</p>
				<ButtonGroup variant="contained">
					<Button
						color="default"
						onClick={() => props.history.push(`/orders/delete/${props.order.id}`)}
					>
						Delete
					</Button>
				</ButtonGroup>
			</div>
		</Paper>
	)
}

class OrdersPage extends Component {
	render() {
		return (
            <div>
                <h1>Orders Page</h1>
				{Object.entries(this.props.state.orders).reverse().map(item => {
					return (
						<OrderView
							order={item[1]}
							state={this.props.state}
							history={this.props.history}/>
					)
				})}
            </div>
		);
	}
}

const mapStateToProps = state => ({
	state: state
})

const mapDispatchToProps = dispatch => ({
	orderActions: bindActionCreators(orderActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrdersPage))
