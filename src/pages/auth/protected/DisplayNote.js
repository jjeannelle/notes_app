import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function DisplayNote() {
  const { id } = useParams();

  const { notes } = useSelector((state) => state.others.notesReducer);

  const indexArticle = notes.findIndex((obj) => obj.title === id);

  return (
    <div className="container p-5">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title mb-2">
            {notes[indexArticle] ? `${notes[indexArticle].title}` : ""}
          </h1>
          <p className="card-subtitle mb-4 text-muted">
            {notes[indexArticle] ? `${notes[indexArticle].subtitle}` : ""}
          </p>
          <p className="card-text">
            {notes[indexArticle] ? `${notes[indexArticle].body}` : ""}
          </p>
        </div>
      </div>
    </div>
  );
}
