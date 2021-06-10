import { HOSTNAME } from './constants'
import * as ActionTypes from './types'

export const getTours = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${HOSTNAME}/api/tours/`)
            if (! response.ok) return
            const json = await response.json()
            dispatch({ type: ActionTypes.GET_TOURS_SUCCESS, tours: json })
        } catch (error) {
            return console.log(error)
        }
    }
}

export const addTour = (tour) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${HOSTNAME}/api/tours/`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(tour)
            })
            if (! response.ok) return
            const json = await response.json()
            dispatch({ type: ActionTypes.ADD_TOUR_SUCCESS, tour: json })
        } catch (error) {
            console.log(error)
        }
    }
}

export const putTour = (tour) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${HOSTNAME}/api/tours/${tour.id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(tour)
            })
            if (! response.ok) return
            const json = await response.json()
            dispatch({ type: ActionTypes.PUT_TOUR_SUCCESS, tour: json })
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteTour = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${HOSTNAME}/api/tours/${id}`, {
                method: 'DELETE'
            })
            if (! response.ok) return
            dispatch({ type: ActionTypes.DEL_TOUR_SUCCESS, id: id })
        } catch (error) {
            console.log(error)
        }
    }
}
