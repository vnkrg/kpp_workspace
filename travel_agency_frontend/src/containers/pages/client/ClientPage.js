import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

function ClientView(props) {
	if (props.client == null) return null

	return (
		<Paper elevation={3} style={{ padding: 16, marginBottom: 16, marginTop: 16, width: 400 }}>
			<div>
				<p>Client ID: {props.client.id}</p>
				<p>First name: {props.client.firstName}</p>
				<p>Middle name: {props.client.middleName}</p>
				<p>Family name: {props.client.familyName}</p>
				<p>Phone: {props.client.phone}</p>
				<p>Address: {props.client.address}</p>
				<ButtonGroup variant="contained">
					<Button
						color="default"
						onClick={() => {props.history.push(`/clients/delete/${props.client.id}`)}}
					>
						Delete
					</Button>
					<Button
						color="default"
						onClick={() => {props.history.push(`/clients/update/${props.client.id}`)}}
					>
						Update
					</Button>
				</ButtonGroup>
			</div>
		</Paper>
	)
}

function OrderView(props) {
	const tour = props.state.tours[props.order.tourID]
	if (tour == undefined)
		return null

	const hotel = props.state.hotels[tour.hotelID]
	if (hotel == undefined)
		return null

	return (
		<Paper elevation={3} style={{ padding: 16, marginBottom: 16, marginTop: 16, width: 400 }}>
			<div>
				<p>Order ID: {props.order.id}</p>
				<p>Tour ID: {tour.id}</p>
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

class ClientPage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render() {
		const clientID = this.props.match.params.id
		return (
            <div>
				<Button onClick={() => {this.props.history.goBack()}}>Back</Button>
				<h1>Client Page</h1>
				<ClientView client={this.props.state.clients[clientID]} history={this.props.history} />

				<h2>Orders of the client</h2>
				{Object.entries(this.props.state.orders).reverse().map(item => {
					const order = item[1]
					if (order.clientID == clientID)
						return <OrderView order={order} state={this.props.state} history={this.props.history}/>
					return null
				})}
            </div>
		);
	}
}

const mapStateToProps = state => ({
	state: state
})

export default withRouter(connect(mapStateToProps)(ClientPage))
