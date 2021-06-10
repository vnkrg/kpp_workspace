import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as hotelActions from '../../../actions/hotelActions'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

function HotelView(props) {
	return (
		<Paper elevation={3} style={{ padding: 16, marginBottom: 16, marginTop: 16, width: 400 }}>
			<div>
				<p>Hotel ID: {props.hotel.id}</p>
				<p>Hotel name: {props.hotel.hotelName}</p>
				<p>Country: {props.hotel.country}</p>
				<p>City: {props.hotel.city}</p>
				<p>Description: {props.hotel.description}</p>
				<ButtonGroup variant="contained">
					<Button
						color="default"
						onClick={() => props.history.push(`/hotels/delete/${props.hotel.id}`)}
					>
						Delete
					</Button>
					<Button
						color="default"
						onClick={() => props.history.push(`/hotels/update/${props.hotel.id}`)}
					>
						Update
					</Button>
					<Button
						color="primary"
						onClick={() => props.history.push(`/hotels/${props.hotel.id}`)}
					>
						View Tours
					</Button>
				</ButtonGroup>
			</div>
		</Paper>
	)
}

class HotelsPage extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}

	render() {
		return (
            <div>
                <h1>Hotels List Page</h1>
				<Button
					variant="outlined"
					onClick={() => {this.props.history.push(`/hotels/create/`)}}
				>
					Create
				</Button>
				{Object.entries(this.props.state.hotels).reverse().map(item => {
					return <HotelView hotel={item[1]} history={this.props.history} />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HotelsPage))
