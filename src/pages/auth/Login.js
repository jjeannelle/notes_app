import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const auth = getAuth();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/protected/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (

    <div className="container p-5 text-light">

      <h1 className="display-3 mb-5">Sign in</h1>

      <form onSubmit={handleLogin} className="sign-up-form">

        <div className="mb-3">
          <label htmlFor="signInEmail" className="form-label">
            Email adress
          </label>
          <input
            name="email"
            required
            type="email"
            className="form-control"
            id="signInEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="signInPwd" className="form-label">
            Password
          </label>
          <input
            name="pwd"
            required
            type="password"
            className="form-control"
            id="signInPwd"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button className="btn btn-primary">Let's go</button>

      </form>
    </div>
  );
}
