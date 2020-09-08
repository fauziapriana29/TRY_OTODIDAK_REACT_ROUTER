import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from '../Component/Navbar/Navbar.jsx'
import Home from '../Pages/Home/Home.jsx'
import IndexMove from '../Pages/MovieTable/index.jsx'

const index = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <div className="container">
                    <Switch>
                        <Route path="/movie-data" component={IndexMove} />
                        <Route path="/" exact component={Home}/>
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default index