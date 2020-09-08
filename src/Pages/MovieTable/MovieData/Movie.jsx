import React, { useState } from 'react'
import Table from '../../../Component/Table/Table.jsx'
import axios from '../../../../node_modules/axios/dist/axios.js'

const Movie = () => {

    const [films, setFilms] = useState([])
    const getData = () => {
        axios.get("https://ghibliapi.herokuapp.com/films").then((respone) => {
            setFilms(respone.data)
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <div>
            <h1>Movie Page</h1>
            <button className="btn btn-success mb-3" onClick={getData}>Get Data</button>
            <Table data={films} />
        </div>
    )
}

export default Movie