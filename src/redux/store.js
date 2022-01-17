import {combineReducers} from 'redux'
import notesReducer from './notes/notesReducer'
import selectedReducer from './notes/selectedReducer'
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/authSlice";

const rootReducer = combineReducers({
  notesReducer,
  selectedReducer,
})

export const store = configureStore({
  reducer: {
    auth: authReducer,
    others: rootReducer,
  },

  
});