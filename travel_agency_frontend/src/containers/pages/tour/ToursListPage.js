import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as tourActions from '../../../actions/tourActions'

import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

function TourView(props) {
	const hotel = props.state.hotels[props.tour.hotelID]
	if (hotel == null) return null

	return (
		<Paper elevation={3} style={{ padding: 16, marginBottom: 16, marginTop: 16, width: 400 }}>
			<div>
				<p>Tour ID: {props.tour.id}</p>
				<p>Hotel:
					<Chip
						size="small"
						label={hotel.hotelName}
						clickable
						onClick={() => props.history.push(`/hotels/${hotel.id}`)}
						style={{marginLeft: 5}}/>
				</p>
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

class ToursListPage extends Component {
	render() {
		return (
            <div>
                <h1>Tours List Page</h1>
				<Button
					variant="outlined"
					onClick={() => {this.props.history.push(`/tours/create/`)}}
				>
					Create
				</Button>

				{Object.entries(this.props.state.tours).reverse().map(tour => {
					const every = Object.entries(this.props.state.orders).every(order => {
						if (order[1].tourID == tour[0])
							return false
						return true
					})
					if (!every) return null

					return (
						<TourView
							tour={tour[1]}
							state={this.props.state}
							history={this.props.history} />
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
	tourActions: bindActionCreators(tourActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ToursListPage))
