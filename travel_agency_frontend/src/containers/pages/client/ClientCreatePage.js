import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import * as clientActions from '../../../actions/clientActions'

import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import ButtonGroup from '@material-ui/core/ButtonGroup'

class ClientCreatePage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			firstNameInput: null,
			familyNameInput: null,
			middleNameInput: null,
			phoneInput: null,
			addressInput: null,
			submitted: false
		}
	}

	submitHandler() {
		this.props.history.push("/clients")
		this.props.clientActions.addClient({
            firstName: this.state.firstNameInput,
            middleName: this.state.middleNameInput,
			familyName: this.state.familyNameInput,
            phone: this.state.phoneInput,
            address: this.state.addressInput
		})
		this.setState({ submitted: true })
	}

	render() {
		return (
            <div>
                <h1>Client Create Page</h1>

				<div style={{ marginBottom: 16 }}>
					<div style={{ marginBottom: 16 }}>
						<TextField
							label="First name"
							value={this.state.firstNameInput}
							onChange={(e) => this.setState({ firstNameInput: e.target.value })} />
					</div>
					<div style={{ marginBottom: 16 }}>
						<TextField
							label="Middle name"
							value={this.state.middleNameInput}
							onChange={(e) => this.setState({ middleNameInput: e.target.value })} />
					</div>
					<div style={{ marginBottom: 16 }}>
						<TextField
							label="Family name"
							value={this.state.familyNameInput}
							onChange={(e) => this.setState({ familyNameInput: e.target.value })} />
					</div>
					<div style={{ marginBottom: 16 }}>
						<TextField
							label="Phone"
							value={this.state.phoneInput}
							onChange={(e) => this.setState({ phoneInput: e.target.value })} />
					</div>
					<div style={{ marginBottom: 16 }}>
						<TextField
							label="Address"
							value={this.state.addressInput}
							onChange={(e) => this.setState({ addressInput: e.target.value })} />
					</div>
				</div>
				<ButtonGroup variant="contained">
					<Button
						color="default"
						onClick={() => {this.props.history.goBack()}}>Cancel</Button>
					<Button
						color="primary"
						disabled={
							!this.state.firstNameInput ||
							!this.state.familyNameInput ||
							!this.state.middleNameInput ||
							!this.state.phoneInput ||
							!this.state.addressInput ||
							this.state.submitted}
						onClick={this.submitHandler.bind(this)}>Create</Button>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClientCreatePage))
