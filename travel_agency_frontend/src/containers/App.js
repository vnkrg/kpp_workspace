import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as clientActions from '../actions/clientActions'
import * as orderActions from '../actions/orderActions'
import * as hotelActions from '../actions/hotelActions'
import * as tourActions from '../actions/tourActions'
import VerticalTabs from '../components/VerticalTabs'

class App extends Component {
	componentDidMount() {
		this.props.clientActions.getClients()
		this.props.orderActions.getOrders()
		this.props.hotelActions.getHotels()
		this.props.tourActions.getTours()
	}

	render() {
		return (
			<div>
				<VerticalTabs>
					{this.props.children}
				</VerticalTabs>
			</div>
		)
	}
}
const mapStateToProps = state => ({
	state: state
})
const mapDispatchToProps = dispatch => ({
	clientActions: bindActionCreators(clientActions, dispatch),
	orderActions: bindActionCreators(orderActions, dispatch),
	hotelActions: bindActionCreators(hotelActions, dispatch),
	tourActions: bindActionCreators(tourActions, dispatch)
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
