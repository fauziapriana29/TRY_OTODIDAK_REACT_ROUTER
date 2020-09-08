import React from 'react'
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Movie from './MovieData/Movie.jsx'
import Detail from './MovieDetail/MovieDetail.jsx'

const Index = () => {

    const {url} = useRouteMatch()

    return (
        // <Movie/>
        <Switch>
            <Route path={`${url}/detail/:id`} component={Detail}/>
            <Route path={url} component={Movie}/>
        </Switch>
    )
}
export default Index