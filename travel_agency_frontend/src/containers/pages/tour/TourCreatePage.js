import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as tourActions from '../../../actions/tourActions'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Autocomplete from '@material-ui/lab/Autocomplete'

class TourCreatePage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selectedHotel: null,
			tourCostInput: null,
			departureDateInput: null,
			numberOfNightsInput: null,
			numberOfPersonsInput: null,
			submitted: false
		}
	}

	submitHandler() {
		this.props.history.push("/tours")
		this.props.tourActions.addTour({
            hotelID: this.state.selectedHotel.id,
            departureDate: this.state.departureDateInput,
            numberOfNights: Number(this.state.numberOfNightsInput),
            numberOfPersons: Number(this.state.numberOfPersonsInput),
			tourCost: Number(this.state.tourCostInput)
        })
		this.setState({ submitted: true })
	}

	render() {
		return (
            <div>
                <h1>Tour Create Page</h1>

				<div style={{ marginBottom: 16 }}>
					<div style={{ marginBottom: 16 }}>
						<Autocomplete
							value={this.state.selectedHotel}
							onChange={(event, newValue) => { this.setState({ selectedHotel: newValue }) }}
							options={Object.entries(this.props.state.hotels).map(item => item[1])}
							getOptionLabel={(option) => option.hotelName + " (id: " + option.id + ")"}
							disableClearable
							style={{ width: 300 }}
							renderInput={(params) => 
								<TextField {...params} label="Select hotel" variant="outlined" />}
						/>
					</div>
					<div style={{ marginBottom: 16 }}>
						<TextField
							label="Departure date"
							value={this.state.departureDateInput}
							onChange={(e) => this.setState({ departureDateInput: e.target.value })} />
					</div>
					<div style={{ marginBottom: 16 }}>
						<TextField
							label="Number of nights"
							value={this.state.numberOfNightsInput}
							onChange={(e) => this.setState({ numberOfNightsInput: e.target.value })} />
					</div>
					<div style={{ marginBottom: 16 }}>
						<TextField
							label="Number of persons"
							value={this.state.numberOfPersonsInput}
							onChange={(e) => this.setState({ numberOfPersonsInput: e.target.value }) } />
					</div>
					<div style={{ marginBottom: 16 }}>
						<TextField
							label="Tour cost"
							value={this.state.tourCostInput}
							onChange={(e) => this.setState({ tourCostInput: e.target.value })} />
					</div>
				</div>
				<ButtonGroup variant="contained">
					<Button
						color="default"
						onClick={() => {this.props.history.goBack()}}>Cancel</Button>
					<Button
						color="primary"
						disabled={
							!this.state.selectedHotel ||
							!this.state.tourCostInput ||
							!this.state.departureDateInput ||
							!this.state.numberOfNightsInput ||
							!this.state.numberOfPersonsInput ||
							this.state.submitted}
						onClick={this.submitHandler.bind(this)}
					>Create</Button>
				</ButtonGroup>
            </div>
		)
	}
}

const mapStateToProps = state => ({
	state: state
})

const mapDispatchToProps = dispatch => ({
	tourActions: bindActionCreators(tourActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TourCreatePage))
