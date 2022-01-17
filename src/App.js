import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { saveUser } from "./redux/slice/authSlice";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./configs/firebase-config";
import ProtectedRoute from './utils/ProtectedRoute';
import Navbar from './components/Navbar';
import ListNotes from './pages/auth/protected/ListNotes';
import DisplayNote from './pages/auth/protected/DisplayNote';
import MainArea from './pages/auth/protected/MainArea';


function App() {

  initializeApp(firebaseConfig);
  const auth = getAuth();

  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(saveUser(user.refreshToken));
      } else {
        dispatch(saveUser(undefined));
      }
    });
  }, [auth, dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/protected" element={<ProtectedRoute />} >
          <Route path="/protected/dashboard" element={<ListNotes />} />
          <Route path="/protected/displayNote/:id" element={<DisplayNote />} />
          <Route path="/protected/edit" element={<MainArea />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
