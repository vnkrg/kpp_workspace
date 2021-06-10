import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as hotelActions from '../../../actions/hotelActions'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

function HotelView(props) {
	if (props.hotel == null) return null

	return (
		<Paper elevation={3} style={{ padding: 16, marginBottom: 16, marginTop: 16, width: 400 }}>
			<div>
				<p>Hotel ID: {props.hotel.id}</p>
				<p>Country: {props.hotel.country}</p>
				<p>City: {props.hotel.city}</p>
				<p>Description: {props.hotel.description}</p>
				<ButtonGroup variant="contained">
					<Button
						color="default"
						onClick={() => {props.history.push(`/hotels/delete/${props.hotel.id}`)}}
					>
						Delete
					</Button>
					<Button
						color="default"
						onClick={() => {props.history.push(`/hotels/update/${props.hotel.id}`)}}
					>
						Update
					</Button>
				</ButtonGroup>
			</div>
		</Paper>
	)
}

function TourView(props) {
	return (
		<Paper elevation={3} style={{ padding: 16, marginBottom: 16, marginTop: 16, width: 400 }}>
			<div>
				<p>TourID: {props.tour.id}</p>
				<p>Departure date: {props.tour.departureDate}</p>
				<p>Nights: {props.tour.numberOfNights}</p>
				<p>Persons: {props.tour.numberOfPersons}</p>
				<p>Tour cost: {props.tour.tourCost}</p>
				<ButtonGroup variant="contained">
					<Button
						color="default"
						onClick={() => {props.history.push(`/tours/delete/${props.tour.id}`)}}
					>
						Delete
					</Button>
					<Button
						color="primary"
						onClick={() => {props.history.push(`/tours/reserve/${props.tour.id}`)}}
					>
						Reserve
					</Button>
				</ButtonGroup>
			</div>
		</Paper>
	)
}

class HotelPage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0)
	}

	render() {
		const hotelID = this.props.match.params.id
		return (
            <div>
				<Button onClick={() => {this.props.history.goBack()}}>Back</Button>
                <h1>Hotel Page</h1>
				<HotelView hotel={this.props.state.hotels[hotelID]} history={this.props.history} />

				<h2>Tours of the hotel</h2>
				{Object.entries(this.props.state.tours).reverse().map(item => {
					const tour = item[1]
					if (tour.hotelID == hotelID)
						return <TourView tour={tour} history={this.props.history} />
					return null
				})}
            </div>
		);
	}
}

const mapStateToProps = state => ({
	state: state
})

const mapDispatchToProps = dispatch => ({
	hotelActions: bindActionCreators(hotelActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HotelPage))
