import React, { useState } from 'react'
import Table from '../../../Component/Table/Table.jsx'
import axios from '../../../../node_modules/axios/dist/axios.js'
import Spinner from '../../../Component/Spinner/Spinner2.jsx'

const Movie = () => {

    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(false)
    const getData = () => {
        setLoading(true)
        axios.get("https://ghibliapi.herokuapp.com/films").then((respone) => {
            setFilms(respone.data)
            setLoading(false)
        }).catch((error) => {
            console.log(error)
        });
    }
    const showLoading = !loading ? null : <div style={{textAlign : "center"}} className="mt-5"><Spinner/></div>
    return (
        <div>
            <h1>Movie Page</h1>
            <button className="btn btn-success mb-3" onClick={getData}>Get Data</button>
            <Table data={films} />
            {showLoading}
        </div>
    )
}

export default Movie