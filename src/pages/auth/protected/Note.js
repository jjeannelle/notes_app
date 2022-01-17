import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Note(props) {

  const dispatch = useDispatch();

  const deleteNote = () => {
    dispatch({
      type: "DELETENOTE",
      payload: props.id,
    });
  };

  const modifyNote = () => {
    dispatch({
      type: "VISUALIZENOTE",
      payload: props,
    });
  };

  return (
    <div className="card link-dark text-decoration-none mb-3">
      <Link
        className="link-dark text-decoration-none"
        to={{
          pathname: `/protected/displayNote/${props.title}`,
        }}
      >
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p className="card-text">{props.subtitle}</p>
        </div>
      </Link>
      <div className="card-body d-flex justify-content-between">
        <div>
          <Link
          className="me-2"
            to={{
              pathname: `/protected/displayNote/${props.title}`,
            }}
          >
            <button className="btn btn-outline-primary">Read</button>
          </Link>
          <Link to="/protected/edit">
            <button className="btn btn-outline-secondary" onClick={modifyNote}>
              Edit
            </button>
          </Link>
        </div>
        <button className="btn btn-outline-danger" onClick={deleteNote}>
          Delete
        </button>
      </div>
    </div>
  );
}
