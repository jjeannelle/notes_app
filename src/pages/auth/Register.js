import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth();

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setEmail("");
        setPassword("");
        navigate("/protected/secret");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="container p-5 text-light">
      <h1 className="display-3 mb-5">Sign up</h1>
      <form onSubmit={handleRegister} className="sign-up-form">
        <div className="mb-3">
          <label htmlFor="signUpEmail" className="form-label">
            Email adress
          </label>
          <input
            name="email"
            required
            type="email"
            className="form-control"
            id="signUpEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="signUpPwd" className="form-label">
            Password
          </label>
          <input
            name="pwd"
            required
            type="password"
            className="form-control"
            id="signUpPwd"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary">Let's go</button>
      </form>
    </div>
  );
}
