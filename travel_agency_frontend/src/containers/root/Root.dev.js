import React from 'react'
import { Provider } from 'react-redux'
import DevTools from './DevTools'
import Routes from '../Routes'

const Root = ({ store }) => (
	<Provider store={store}>
		<Routes />
		<DevTools />
	</Provider>
)

export default Root
