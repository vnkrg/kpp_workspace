import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as clientActions from '../../../actions/clientActions'

import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

function ClientView(props) {
	return (
		<Paper elevation={3} style={{ padding: 16, marginBottom: 16, marginTop: 16, width: 400 }}>
			<div>
				<p>Client ID: {props.client.id}</p>
				<p>First name: {props.client.firstName}</p>
				<p>Middle name: {props.client.middleName}</p>
				<p>Family name: {props.client.familyName}</p>
				<p>Phone: {props.client.phone}</p>
				<p>Address: {props.client.address}</p>
				<ButtonGroup variant="contained">
					<Button
						color="default"
						onClick={() => {props.history.push(`/clients/delete/${props.client.id}`)}}
					>
						Delete
					</Button>
					<Button
						color="default"
						onClick={() => {props.history.push(`/clients/update/${props.client.id}`)}}
					>
						Update
					</Button>
					<Button
						color="primary"
						onClick={() => { props.history.push(`/clients/${props.client.id}`) }}
					>
						View Orders
					</Button>
				</ButtonGroup>
			</div>
		</Paper>
	)
}

class ClientsListPage extends Component {
	render() {
		return (
            <div>
                <h1>Clients List Page</h1>
				<Button
					variant="outlined"
					onClick={() => {this.props.history.push(`/clients/create/`)}}
				>
					Create
				</Button>
				{Object.entries(this.props.state.clients).reverse().map(item => {
					return <ClientView client={item[1]} history={this.props.history} />
				})}
            </div>
		);
	}
}

const mapStateToProps = state => ({
	state: state
})

const mapDispatchToProps = dispatch => ({
	clientActions: bindActionCreators(clientActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClientsListPage))
