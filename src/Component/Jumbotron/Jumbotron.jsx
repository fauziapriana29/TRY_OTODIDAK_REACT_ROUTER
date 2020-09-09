import React from "react";

const Jumbotron = (props) => {

    const {showData} = props

  return (
    <div>
      <div className="jumbotron">
              <h1 className="display-4">{showData.title}</h1>
        <p className="lead">
          {showData.description}
              </p>
              <p className="lead">
                   Year : {showData.release_date}
              </p>
        <hr className="my-4" />
              <p>
                  Producer : {showData.producer}
              </p>
              <p>
                  Director : {showData.director}
              </p>
      </div>
    </div>
  );
};

export default Jumbotron
