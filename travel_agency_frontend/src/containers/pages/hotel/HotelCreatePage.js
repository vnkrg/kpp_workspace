import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as hotelActions from '../../../actions/hotelActions'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import ButtonGroup from '@material-ui/core/ButtonGroup'

class HotelCreatePage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hotelNameInput: null,
			countryInput: null,
			cityInput: null,
			descriptionInput: null,
			submitted: false
		}
	}

	submitHandler() {
		this.props.history.push("/hotels")
		this.props.hotelActions.addHotel({
            hotelName: this.state.hotelNameInput,
            country: this.state.countryInput,
            city: this.state.cityInput,
            description: this.state.descriptionInput,
        })
		this.setState({ submitted: true })
	}

	render() {
		return (
            <div>
                <h1>Hotel Create Page</h1>
				<div style={{ marginBottom: 16 }}>
					<div style={{ marginBottom: 16 }}>
						<TextField
							label="Hotel name"
							value={this.state.hotelNameInput}
							onChange={(e) => this.setState({ hotelNameInput: e.target.value })} />
					</div>
					<div style={{ marginBottom: 16 }}>
						<TextField
							label="Country"
							value={this.state.countryInput}
							onChange={(e) => this.setState({ countryInput: e.target.value })} />
					</div>
					<div style={{ marginBottom: 16 }}>
						<TextField
							label="City"
							value={this.state.cityInput}
							onChange={(e) => this.setState({ cityInput: e.target.value })} />
					</div>
					<div style={{ marginBottom: 16 }}>
						<TextField
                            label="Desctiption"
                            multiline
                            fullWidth
                            rows={5}
                            value={this.state.descriptionInput}
                            onChange={(e) => this.setState({ descriptionInput: e.target.value })} />
					</div>
				</div>
				<ButtonGroup variant="contained">
					<Button
						color="default"
						onClick={() => {this.props.history.goBack()}}>Cancel</Button>
					<Button
						color="primary"
						disabled={
							!this.state.hotelNameInput ||
							!this.state.countryInput ||
							!this.state.cityInput ||
							!this.state.descriptionInput ||
							this.state.submitted}
						onClick={this.submitHandler.bind(this)}
					>
						Create
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
	hotelActions: bindActionCreators(hotelActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HotelCreatePage))
