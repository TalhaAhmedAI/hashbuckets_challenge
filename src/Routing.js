import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Photos from './pages/Photos'
import Cart from './pages/Cart'

const Routing = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/"> <Photos /> </Route>
                <Route path="/cart"> <Cart /> </Route>
            </Switch>
        </Router>
    )
}

export default Routing;