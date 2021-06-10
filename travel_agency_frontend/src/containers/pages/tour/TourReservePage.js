import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as orderActions from '../../../actions/orderActions'

import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Autocomplete from '@material-ui/lab/Autocomplete'

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

class TourReservePage extends Component {
    constructor(props) {
        super(props)
        this.state = { selectedClient: null, submitted: false }
    }

    reserveHandler() {
        this.props.history.push("/orders")
        this.props.orderActions.addOrder({
            tourID: this.props.match.params.id,
            clientID: this.state.selectedClient.id
        })
        this.setState({ submitted: true })
    }

	render() {
		const tourID = this.props.match.params.id
		return (
            <div>
				<h1>Tour Reserve Page</h1>
				<TourView
                    tour={this.props.state.tours[tourID]}
                    state={this.props.state}
                    history={this.props.history} />

                <div style={{ marginTop: 16 }}>
                    <Autocomplete
                        value={this.state.selectedClient}
                        onChange={(event, newValue) => { this.setState({ selectedClient: newValue }) }}
                        options={Object.entries(this.props.state.clients).map(item => item[1])}
                        getOptionLabel={(option) => 
                            option.familyName + " " +
                            option.firstName + " " +
                            option.middleName + " (id: " + option.id + ")"}
                        disableClearable
                        style={{ width: 400 }}
                        renderInput={(params) =>
                            <TextField {...params}
                                label="Select client"
                                variant="outlined" />}
                    />
                </div>
                <ButtonGroup variant="contained" style={{ marginTop: 16 }}>
                    <Button
                        color="default"
                        onClick={() => {this.props.history.goBack()}}>Cancel</Button>
                    <Button
                        color="primary"
                        disabled={!this.state.selectedClient || this.state.submitted}
                        onClick={this.reserveHandler.bind(this)}
                    >
                        Reserve
                    </Button>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TourReservePage))
