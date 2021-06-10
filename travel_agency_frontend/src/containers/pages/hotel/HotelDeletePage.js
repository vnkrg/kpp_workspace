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
				<p>Hotel name: {props.hotel.hotelName}</p>
				<p>Country: {props.hotel.country}</p>
				<p>City: {props.hotel.city}</p>
				<p>Description: {props.hotel.description}</p>
			</div>
		</Paper>
	)
}

class HotelDeletePage extends Component {
    deleteHandler() {
		this.props.history.push("/hotels")
        this.props.hotelActions.deleteHotel(this.props.match.params.id)
    }

	render() {
		const hotelID = this.props.match.params.id
		return (
            <div>
				<h1>Hotel Delete Page</h1>
				<HotelView hotel={this.props.state.hotels[hotelID]} />

				<p>Delete the hotel?</p>
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
	hotelActions: bindActionCreators(hotelActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HotelDeletePage))
