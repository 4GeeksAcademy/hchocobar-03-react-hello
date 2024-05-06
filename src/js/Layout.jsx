import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Imporar componentes
import Navbar from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
import { Alert } from "./component/Alert.jsx";
// Importar Vistas
import { HomeSW } from "./views/HomeSW.jsx";
import { Card } from "./views/Card.jsx";
import { Login } from "./views/Login.jsx";
import { Error404 } from "./views/Error404.jsx";
import { AlbumsJPH } from "./views/AlbumsJPH.jsx";
import Jumbotron from "./views/Jumbotron.jsx";
import { PostsJPH } from "./views/PostsJPH.jsx";
import { SimpleCounter } from "./views/SimpleCounter.jsx";
import { SimpleCounterBonus } from "./views/SimpleCounterBonus.jsx";
import { UsersJPH } from "./views/UsersJPH.jsx";
import { Derivar } from "./views/Derivar.jsx";
import { TodoList } from "./views/TodoList.jsx";
import { TodoList4Geeks } from "./views/TodoList4Geeks.jsx";
import { TodoListWithFetch } from "./views/TodoListWithFetch.jsx";
import { TodosJPH } from "./views/TodosJPH.jsx";
import { TrafficLight } from "./views/TrafficLight.jsx";


export const Layout = () => {

  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Navbar />
        <Alert />
        <h1 className="text-center">React Router</h1>

        <Routes>
          <Route path="/" element={<HomeSW />} />
          <Route path="/albums" element={<AlbumsJPH />} />
          <Route path="/card" element={<Card />} />
          <Route path="/jumbotron" element={<Jumbotron />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts" element={<PostsJPH />} />
          <Route path="/counter" element={<SimpleCounter />} />
          <Route path="/counter-plus" element={<SimpleCounterBonus />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/todo-list-fetch" element={<TodoListWithFetch />} />
          <Route path="/todo-list-4geeks" element={<TodoList4Geeks />} />
          <Route path="/todo-list-jph" element={<TodosJPH />} />
          <Route path="/traffic-light" element={<TrafficLight />} />

          <Route path="/users" element={<UsersJPH />} />
          <Route path="/derivar" element={<Derivar/>} />


          <Route path="*" element={<Error404 />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}


