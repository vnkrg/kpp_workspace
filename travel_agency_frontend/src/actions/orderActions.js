import { HOSTNAME } from './constants'
import * as ActionTypes from './types'

export const getOrders = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${HOSTNAME}/api/orders/`)
            if (! response.ok) return
            const json = await response.json()
            dispatch({ type: ActionTypes.GET_ORDERS_SUCCESS, orders: json })
        } catch (error) {
            return console.log(error)
        }
    }
}

export const addOrder = (order) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${HOSTNAME}/api/orders/`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(order)
            })
            if (! response.ok) return
            const json = await response.json()
            dispatch({ type: ActionTypes.ADD_ORDER_SUCCESS, order: json })
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteOrder = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${HOSTNAME}/api/orders/${id}`, {
                method: 'DELETE'
            })
            if (! response.ok) return
            dispatch({ type: ActionTypes.DEL_ORDER_SUCCESS, id: id })
        } catch (error) {
            console.log(error)
        }
    }
}
