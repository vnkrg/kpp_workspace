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
	if (props.tour == null) return null

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
			</div>
		</Paper>
	)
}

class TourDeletePage extends Component {
    deleteHandler() {
		this.props.history.push("/tours")
        this.props.tourActions.deleteTour(this.props.match.params.id)
    }

	render() {
		const tourID = this.props.match.params.id
		return (
            <div>
				<h1>Tour Delete Page</h1>
				<TourView
					tour={this.props.state.tours[tourID]}
					state={this.props.state}
					history={this.props.history}/>

				<p>Delete the tour?</p>
                <ButtonGroup variant="contained">
                    <Button
						color="default"
						onClick={() => {this.props.history.goBack()}}>Cancel</Button>
                    <Button
						color="secondary"
						onClick={this.deleteHandler.bind(this)}>OK</Button>
                </ButtonGroup>
            </div>
		)
	}
}
const mapStateToProps = state => ({ state: state })
const mapDispatchToProps = dispatch => ({
	tourActions: bindActionCreators(tourActions, dispatch)
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TourDeletePage))
