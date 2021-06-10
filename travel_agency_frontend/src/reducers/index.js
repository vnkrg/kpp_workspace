import * as ActionTypes from '../actions/types'

const initialState = {
    clients: {},
    hotels: {},
    tours: {},
    orders: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // --- CLIENT
        case ActionTypes.GET_CLIENTS_SUCCESS: {
            const clientsByID = {}
            action.clients.forEach(item => { clientsByID[item.id] = item });
            return Object.assign({}, state, { clients: clientsByID })
        }
        case ActionTypes.ADD_CLIENT_SUCCESS:
        case ActionTypes.PUT_CLIENT_SUCCESS: {
            return Object.assign({}, state, {
                clients: Object.assign({}, state.clients, {
                    [action.client.id]: action.client
                })
            })
        }
        case ActionTypes.DEL_CLIENT_SUCCESS: {
            const clients = JSON.parse(JSON.stringify(state.clients))
            const orders = JSON.parse(JSON.stringify(state.orders))
            delete clients[action.id]
            Object.entries(orders).forEach(order => {
                if (order[1].clientID == action.id)
                    delete orders[order[0]]
            })
            return Object.assign({}, state, { clients: clients, orders: orders })
        }

        // -- HOTEL
        case ActionTypes.GET_HOTELS_SUCCESS: {
            const hotelsByID = {}
            action.hotels.forEach(item => { hotelsByID[item.id] = item });
            return Object.assign({}, state, { hotels: hotelsByID })
        }
        case ActionTypes.ADD_HOTEL_SUCCESS:
        case ActionTypes.PUT_HOTEL_SUCCESS:
            return Object.assign({}, state, {
                hotels: Object.assign({}, state.hotels, {
                    [action.hotel.id]: action.hotel
                })
            })
        case ActionTypes.DEL_HOTEL_SUCCESS: {
            const hotels = JSON.parse(JSON.stringify(state.hotels))
            const tours = JSON.parse(JSON.stringify(state.tours))
            const orders = JSON.parse(JSON.stringify(state.orders))
            delete hotels[action.id]
            Object.entries(tours).forEach(tour => {
                if (tour[1].hotelID == action.id)
                    delete tours[tour[0]]
                Object.entries(orders).forEach(order => {
                    if (order[1].tourID == tour.id)
                        delete orders[order[0]]
                })
            })
            return Object.assign({}, state, {
                hotels: hotels,
                tours: tours,
                orders: orders
            })
        }

        // -- TOUR
        case ActionTypes.GET_TOURS_SUCCESS: {
            const toursByID = {}
            action.tours.forEach(item => {
                toursByID[item.id] = item
            });
            return Object.assign({}, state, { tours: toursByID })
        }
        case ActionTypes.ADD_TOUR_SUCCESS:
        case ActionTypes.PUT_TOUR_SUCCESS: {
            return Object.assign({}, state, {
                tours: Object.assign({}, state.tours, {
                    [action.tour.id]: action.tour
                })
            })
        }
        case ActionTypes.DEL_TOUR_SUCCESS: {
            const tours = JSON.parse(JSON.stringify(state.tours))
            const orders = JSON.parse(JSON.stringify(state.orders))
            delete tours[action.id]
            Object.entries(orders).forEach(order => {
                if (order[1].tourID == action.id)
                    delete orders[order[0]]
            })
            return Object.assign({}, state, { tours: tours, orders: orders })
        }

        // -- ORDER
        case ActionTypes.GET_ORDERS_SUCCESS: {
            const ordersByID = {}
            action.orders.forEach(item => {
                ordersByID[item.id] = Object.assign({}, item)
            });
            return Object.assign({}, state, { orders: ordersByID })
        }
        case ActionTypes.ADD_ORDER_SUCCESS: {
            return Object.assign({}, state, {
                orders: Object.assign({}, state.orders, {
                    [action.order.id]: action.order
                })
            })
        }
        case ActionTypes.DEL_ORDER_SUCCESS: {
            const orders = JSON.parse(JSON.stringify(state.orders))
            delete orders[action.id]
            return Object.assign({}, state, { orders: orders })
        }
    
        default:
            return state
    }
}

export default rootReducer
