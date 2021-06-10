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
	if (props.order == null) return null

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
						label={client.firstName + " " + client.middleName + " " + client.familyName}
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
			</div>
		</Paper>
	)
}

class OrderDeletePage extends Component {
    deleteHandler() {
		this.props.history.push("/orders")
        this.props.orderActions.deleteOrder(this.props.match.params.id)
    }

	render() {
		const orderID = this.props.match.params.id
		return (
            <div>
				<h1>Order Delete Page</h1>
				<OrderView
					order={this.props.state.orders[orderID]}
					state={this.props.state}
					history={this.props.history} />

				<p>Delete the order?</p>
                <ButtonGroup variant="contained">
                    <Button
						color="primary"
						onClick={() => {this.props.history.goBack()}}>Cancel</Button>
                    <Button
						color="secondary"
						onClick={this.deleteHandler.bind(this)}>OK</Button>
                </ButtonGroup>
            </div>
		)
	}
}

const mapStateToProps = state => ({
	state: state
})

const mapDispatchToProps = dispatch => ({
	orderActions: bindActionCreators(orderActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(OrderDeletePage))
