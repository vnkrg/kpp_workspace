import { HOSTNAME } from './constants'
import * as ActionTypes from './types'

export const getHotels = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${HOSTNAME}/api/hotels/`)
            if (! response.ok) return
            const json = await response.json()
            dispatch({ type: ActionTypes.GET_HOTELS_SUCCESS, hotels: json })
        } catch (error) {
            return console.log(error)
        }
    }
}

export const addHotel = (hotel) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${HOSTNAME}/api/hotels/`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(hotel)
            })
            if (! response.ok) return
            const json = await response.json()
            dispatch({ type: ActionTypes.ADD_HOTEL_SUCCESS, hotel: json })
        } catch (error) {
            console.log(error)
        }
    }
}

export const putHotel = (hotel) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${HOSTNAME}/api/hotels/${hotel.id}`, {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(hotel)
            })
            if (! response.ok) return
            const json = await response.json()
            dispatch({ type: ActionTypes.PUT_HOTEL_SUCCESS, hotel: json })
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteHotel = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${HOSTNAME}/api/hotels/${id}`, { method: 'DELETE' })
            if (! response.ok) return
            dispatch({ type: ActionTypes.DEL_HOTEL_SUCCESS, id: id })
        } catch (error) {
            console.log(error)
        }
    }
}
