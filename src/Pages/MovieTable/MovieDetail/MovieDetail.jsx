import React from 'react'
import {useHistory} from 'react-router-dom'

const Detail = () => {
    const history = useHistory()
    const back = () => {
        history.replace("/movie-data")
    }
    return (
        <div>
            <button className="btn btn-danger mt-3 mb-2" onClick={back}>Back</button>
            <h1>Detail Page</h1>
        </div>
    )
}

export default Detail