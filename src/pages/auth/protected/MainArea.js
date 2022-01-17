import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuiv4 } from "uuid";
import { useNavigate } from "react-router-dom";

export default function MainArea() {
  const [inpInfo, setInpInfo] = useState({
    title: "",
    subtitle: "",
    body: "",
  });

  const [inpModify, setInpModify] = useState({
    title: "",
    subtitle: "",
    body: "",
  });

  const selected = useSelector(
    (state) => state.others.selectedReducer.selectedNote
  );

  useEffect(() => {
    setInpModify(selected);
  }, [selected]);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [validation, setValidation] = useState(true);

  const updateInputs = (e) => {
    const actualInp = e.target.getAttribute("id");

    if (selected.toggle) {
      const newObjState = { ...inpModify, [actualInp]: e.target.value };
      setInpModify(newObjState);
    } else if (selected.toggle === false) {
      const newObjState = { ...inpInfo, [actualInp]: e.target.value };
      setInpInfo(newObjState);
    }
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (selected.toggle) {
      if (selected.title.length < 1) {
        setValidation(false);
        return;
      }

      setValidation(true);

      dispatch({
        type: "UPDATENOTE",
        payload: inpModify,
      });
      dispatch({
        type: "RESETNOTE",
      });
      setInpModify({
        title: "",
        subtitle: "",
        body: "",
      });
    } else if (selected.toggle === false) {
      if (inpInfo.title.length < 1) {
        setValidation(false);
        return;
      }

      setValidation(true);

      dispatch({
        type: "ADDNOTE",
        payload: {
          ...inpInfo,
          id: uuiv4(),
        },
      });

      setInpInfo({
        title: "",
        subtitle: "",
        body: "",
      });
    }
    navigate("/protected/dashboard");
  };

  return (
    <div className="container p-5 text-light">
      <h1 className="display-3 mb-5">New Note</h1>

      <form onSubmit={handleForm}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            value={inpModify.toggle ? inpModify.title : inpInfo.title}
            onChange={updateInputs}
            type="text"
            id="title"
            className="form-control"
          />
          {!validation && (
            <div className="d-block invalid-feedback">
              Veuillez renseigner un titre.
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="subtitle" className="form-label">
            Subtitle
          </label>
          <input
            value={inpModify.toggle ? inpModify.subtitle : inpInfo.subtitle}
            onChange={updateInputs}
            type="text"
            id="subtitle"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Text
          </label>
          <textarea
            value={inpModify.toggle ? inpModify.body : inpInfo.body}
            onChange={updateInputs}
            id="body"
            placeholder="Your text ..."
            className="form-control"
          ></textarea>
        </div>
        <button className="btn btn-primary">Save</button>
      </form>
    </div>
  );
}
