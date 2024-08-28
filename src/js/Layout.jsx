import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Importar los compoenentes
import { Jumbotrom } from "./component/Jumbotrom.jsx";
import { Card } from './component/Card.jsx';
import { Characters } from "./component/Characters.jsx";
import Navbar from './component/Navbar.jsx';
import { Footer } from './component/Footer.jsx';
import { Title } from './component/Title.jsx';
import {Error404 } from './component/Error404.jsx';
import { TrafficLight } from './component/TrafficLight.jsx';
import { SimpleCounter } from './component/SimpleCounter.jsx';
import { TodoList } from './component/TodoList.jsx';


export const Layout = () => {

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route element={<Jumbotrom />} path="/"/>
          <Route element={<Card/>} path='/card'/>
          <Route element={<Characters/>} path='/characters'/>
          <Route element={<TrafficLight/>} path='/traffic-light'/>
          <Route element={<SimpleCounter/>} path='/simple-counter'/>
          <Route element={<TodoList/>} path='/todo-list'/>
          <Route element={<Error404/>} path='*' />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}