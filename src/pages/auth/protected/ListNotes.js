import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";

export default function ListNotes() {
  const { notes } = useSelector((state) => state.others.notesReducer);

  return (
    <div className="container p-5 text-light">
      <h1 className="display-3 mb-5">Voici vos notes</h1>
      <div className="row">
        {notes.map((item, index) => (
          <div className="col-sm-1 col-md-6 col-lg-4 col-xl-3" key={index}>
            <Note
              key={item.id}
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              body={item.body}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
