import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSumbit = (value, e) => {
    console.log(value);

    e.target.reset();
  };

  return (
    <div className="container">
      <div className="form-group">
        <form onSubmit={handleSubmit(onSumbit)}>
          <label htmlFor="list">List :</label>
          <input type="text" className="form-control" name="list" ref={register({ required: true })} />
          {errors.list && <span>This field is required</span>}
          <label htmlFor="description">Description :</label>
          <input
                      type="text"
                      className="form-control"
            name="description"
            ref={register({ required: true })}
          />
                  {errors.description && <span>This field is required</span>}
                  <br/>
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
