import React from "react";
import "bootswatch/dist/superhero/bootstrap.min.css";
// TODO: Note: Replace ^[theme]^ (examples: darkly, slate, cosmo, spacelab, and superhero. See https://bootswatch.com
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importar Componentes
import Navbar from './component/Navbar.jsx';
import { Alert } from "./component/Alert.jsx";
// Importar Vistas
import { CardPlaceholder } from './views/CardPlaceholder.jsx';
import Home from './views/Home.jsx';
import { TodoListFetch } from "./views/TodoListFetch.jsx";
import { Form } from "./views/Form.jsx"
import { JPHUsers } from "./views/JPHUsers.jsx";
import { User } from "./views/User.jsx";

export const Layout = () => {

  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<TodoListFetch />} path='/todo-list-fetch' />
          <Route element={<Form />} path='/login' />
          <Route element={<CardPlaceholder />} path='/card' />
          <Route element={<JPHUsers/>} path='/jph-users'/>
          <Route path="/user/:userId" element={<User />} />
          <Route element={<h1>Not found!</h1>} path='*' />
        </Routes>
        <Alert>
          <p>Made by{" "}
            <a href="http://www.4geeks.com" target="_blank">4Geeks Academy</a>, withlove!
          </p>
        </Alert>
      </BrowserRouter>
    </div>

  );
}
