import React from 'react'
import { Route, Switch } from 'react-router-dom'

import App from './App'

import OrdersListPage from './pages/order/OrdersListPage'
import OrderDeletePage from './pages/order/OrderDeletePage'

import ToursListPage from './pages/tour/ToursListPage'
import TourCreatePage from './pages/tour/TourCreatePage'
import TourDeletePage from './pages/tour/TourDeletePage'
import TourReservePage from './pages/tour/TourReservePage'

import HotelPage from './pages/hotel/HotelPage'
import HotelsListPage from './pages/hotel/HotelsListPage'
import HotelCreatePage from './pages/hotel/HotelCreatePage'
import HotelUpdatePage from './pages/hotel/HotelUpdatePage'
import HotelDeletePage from './pages/hotel/HotelDeletePage'

import ClientPage from './pages/client/ClientPage'
import ClientsListPage from './pages/client/ClientsListPage'
import ClientCreatePage from './pages/client/ClientCreatePage'
import ClientUpdatePage from './pages/client/ClientUpdatePage'
import ClientDeletePage from './pages/client/ClientDeletePage'

const Routes = () => (
    <App>
        <Switch>
			<Route exact path="/" component={OrdersListPage} />

            <Route exact path="/orders" component={OrdersListPage} />
            <Route exact path="/orders/delete/:id" component={OrderDeletePage} />

            <Route exact path="/tours" component={ToursListPage} />
            <Route exact path="/tours/create" component={TourCreatePage} />
            <Route exact path="/tours/delete/:id" component={TourDeletePage} />
            <Route exact path="/tours/reserve/:id" component={TourReservePage} />

            <Route exact path="/clients" component={ClientsListPage} />
            <Route exact path="/clients/create" component={ClientCreatePage} />
            <Route exact path="/clients/update/:id" component={ClientUpdatePage} />
            <Route exact path="/clients/delete/:id" component={ClientDeletePage} />
            <Route exact path="/clients/:id" component={ClientPage} />

            <Route exact path="/hotels" component={HotelsListPage} />
            <Route exact path="/hotels/create" component={HotelCreatePage} />
            <Route exact path="/hotels/update/:id" component={HotelUpdatePage} />
            <Route exact path="/hotels/delete/:id" component={HotelDeletePage} />
            <Route exact path="/hotels/:id" component={HotelPage} />
		</Switch>
    </App>
)

export default Routes
