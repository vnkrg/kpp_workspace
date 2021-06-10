import { HOSTNAME } from './constants'
import * as ActionTypes from './types'

export const getClients = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${HOSTNAME}/api/clients/`)
            if (! response.ok) return
            const json = await response.json()
            dispatch({ type: ActionTypes.GET_CLIENTS_SUCCESS, clients: json })
        } catch (error) {
            return console.log(error)
        }
    }
}

export const addClient = (client) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${HOSTNAME}/api/clients/`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(client)
            })
            if (! response.ok) return
            const json = await response.json()
            dispatch({ type: ActionTypes.ADD_CLIENT_SUCCESS, client: json })
        } catch (error) {
            console.log(error)
        }
    }
}

export const putClient = (client) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${HOSTNAME}/api/clients/${client.id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(client)
            })
            if (! response.ok) return
            const json = await response.json()
            dispatch({ type: ActionTypes.PUT_CLIENT_SUCCESS, client: json })
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteClient = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${HOSTNAME}/api/clients/${id}`, {
                method: 'DELETE'
            })
            if (! response.ok) return
            dispatch({ type: ActionTypes.DEL_CLIENT_SUCCESS, id: id })
        } catch (error) {
            console.log(error)
        }
    }
}
