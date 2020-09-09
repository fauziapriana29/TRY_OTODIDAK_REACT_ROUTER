import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from '../../../../node_modules/axios/dist/axios.js'
import Spinner from '../../../Component/Spinner/Spinner.jsx'
import Jumbotron from '../../../Component/Jumbotron/Jumbotron.jsx'

const Detail = () => {
    const history = useHistory()
    const { id } = useParams()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    const back = () => {
        history.replace("/movie-data")
    }

    const fetchData = async () => {
        setLoading(true)
        await axios.get(`https://ghibliapi.herokuapp.com/films/${id}`).then((respone) => {
            setData(respone.data)
            console.log(respone.data)
            setLoading(false)
        }).catch((error) => {
            console.log(error)
        });
    }

    const isLoading = !loading ? null : (
      <div style={{ textAlign: "center" }}>
        <Spinner />
      </div>
    );
    const showDetail = !data ? null : (
      <div style={{ textAlign: "center" }}>
        <Jumbotron showData={data} />
      </div>
    );

    useEffect(() => {
        fetchData()
    }, [id])
    return (
        <div>
            <button className="btn btn-danger mt-3 mb-2" onClick={back}>Back</button>
            <h1>Detail Page</h1>
            {isLoading}
            {showDetail}
        </div>
    )
}

export default Detail