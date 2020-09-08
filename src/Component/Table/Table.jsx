import React from 'react'
import {Link, useRouteMatch} from 'react-router-dom'

const Table = (props) => {
    const { data } = props
    const { url } = useRouteMatch()
    
    const mapData = data.map((data, index) => {
        return (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{data.title}</td>
                <td>{data.producer}</td>
                <td>{data.director}</td>
                <td>
                    <Link className="btn btn-primary" to={`${url}/detail/${data.id}`}>Detail</Link>
            </td>
          </tr>
        );
    })


    return (
      <div>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Title</th>
              <th scope="col">Producer</th>
              <th scope="col">Directo</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{mapData}</tbody>
        </table>
      </div>
    );
}

export default Table