import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as hotelActions from '../../../actions/hotelActions'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import ButtonGroup from '@material-ui/core/ButtonGroup'

class HotelCreatePage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			hotelNameInput: null,
			countryInput: null,
			cityInput: null,
			descriptionInput: null,
			initialized: false
		}
	}

	componentDidMount() {
		const hotel = this.props.state.hotels[this.props.match.params.id]
		if (hotel == null) return
		this.setState({
			hotelNameInput: hotel.hotelName,
			countryInput: hotel.country,
			cityInput: hotel.city,
			descriptionInput: hotel.description,
			initialized: true
		})
	}

	submitHandler() {
		this.props.history.push("/hotels")
		this.props.hotelActions.putHotel({
			id: this.props.match.params.id,
            hotelName: this.state.hotelNameInput,
            country: this.state.countryInput,
            city: this.state.cityInput,
            description: this.state.descriptionInput
        })
	}

	render() {
		return (
            <div>
                <h1>Hotel Update Page</h1>

				<div style={{ marginBottom: 16, width: 500 }}>
					<div style={{ marginBottom: 16 }}>
						<TextField
							label="Hotel name"
							value={this.state.hotelNameInput}
							onChange={(e) => this.setState({ hotelNameInput: e.target.value })} />
					</div>
					<div style={{ marginBottom: 16 }}>
						<TextField
							label="Country name"
							value={this.state.countryInput}
							onChange={(e) => this.setState({ countryInput: e.target.value })} />
					</div>
					<div style={{ marginBottom: 16 }}>
						<TextField
							label="City name"
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
						onClick={() => {this.props.history.goBack()}}
					>
						Cancel
					</Button>
					<Button
						color="primary"
						disabled={
							!this.state.hotelNameInput ||
							!this.state.countryInput ||
							!this.state.cityInput ||
							!this.state.descriptionInput ||
							!this.state.initialized}
						onClick={this.submitHandler.bind(this)}
					>
						Update
					</Button>
				</ButtonGroup>
            </div>
		)
	}
}
const mapStateToProps = state => ({state: state })
const mapDispatchToProps = dispatch => ({
	hotelActions: bindActionCreators(hotelActions, dispatch)
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HotelCreatePage))
