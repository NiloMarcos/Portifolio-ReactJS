import React from "react";

import Home from './pages/Home';

import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

export default function App(){
  return(
    <main>
      <Home />
      <ToastContainer autoClose={3000} />
    </main>
  )
}