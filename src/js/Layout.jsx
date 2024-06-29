import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Jumbotron } from "./component/Jumbotron.jsx";
import Navbar from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
import { Login } from "./component/Login.jsx";
import { SimpleCounter } from "./component/SimpleCounter.jsx";
import { Error404 } from "./component/Error404.jsx";
import { TodoList } from "./component/TodoList.jsx";
import { TodoListWithFetch } from "./component/TodoListWithFetch.jsx";
import { Alert } from "./component/Alert.jsx";


const Layout = () => {

  return (
    <div className="d-flex flex-column min-vh-100">
        <BrowserRouter>
          <Navbar/>
          <h1 className="text-center">React Router Dom</h1>
          <Alert/>
          <Routes>
            <Route element={<Jumbotron/>} path='/'/>
            <Route element={<Login/>} path='/login'/>
            <Route element={<SimpleCounter/>} path='/simple-counter'/>
            <Route element={<TodoList/>} path='/todo-list'/>
            <Route element={<TodoListWithFetch/>} path='/todo-list-with-fetch'/>
            <Route element={<Error404/>} path='*'/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  )

}

export default Layout