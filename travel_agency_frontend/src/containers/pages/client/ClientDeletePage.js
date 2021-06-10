import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as clientActions from '../../../actions/clientActions'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

function ClientView(props) {
	if (props.client == null) return null

	return (
		<Paper elevation={3} style={{ padding: 16, marginBottom: 16, marginTop: 16, width: 400 }}>
			<div>
				<p>Client ID: {props.client.id}</p>
				<p>First name: {props.client.firstName}</p>
				<p>Middle name: {props.client.middleName}</p>
				<p>Family name: {props.client.familyName}</p>
				<p>Phone: {props.client.phone}</p>
				<p>Address: {props.client.address}</p>
			</div>
		</Paper>
	)
}

class ClientDeletePage extends Component {
    deleteHandler() {
		this.props.history.push("/clients")
        this.props.clientActions.deleteClient(this.props.match.params.id)
    }

	render() {
		const clientID = this.props.match.params.id
		return (
            <div>
				<h1>Client Delete Page</h1>
				<ClientView client={this.props.state.clients[clientID]} />

				<p>Delete the client?</p>
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

const mapStateToProps = state => ({
	state: state
})

const mapDispatchToProps = dispatch => ({
	clientActions: bindActionCreators(clientActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClientDeletePage))
