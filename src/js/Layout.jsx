import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { Jumbotron } from "./component/Jumbotron.jsx";
import Navbar from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
import { Card } from "./component/Card.jsx";
import { FetchExample } from "./component/FetchExample.jsx";
import { Alert } from "./component/Alert.jsx";
import { Error404 } from "./component/Error404.jsx";


export const Layout = () => {

  return (
    <div>
        <BrowserRouter>
          <Navbar/>
          <Alert/>
          <Routes>
            <Route element={<Jumbotron/>} path="/" />
            <Route element={<Card/>} path='/services' />
            <Route element={<FetchExample/>} path='/publications' />
            <Route element={<Error404/>} path='*' />
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  )
}