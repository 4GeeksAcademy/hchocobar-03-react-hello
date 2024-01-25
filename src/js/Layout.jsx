import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Importar Componentes
import { Footer } from "./component/Footer.jsx";
import Navbar from "./component/Navbar.jsx";
// Importar Vistas
import Home from './views/Home.jsx'
import { Card } from "./views/Card.jsx";
import { TodoListFetch } from "./views/TodoListFetch.jsx";
import { Users } from "./component/Users.jsx";
import SimpleCounterBonus from "./views/SimpleCounterBounus.jsx";
import { TodoList } from "./views/TodoList.jsx";
import { Form } from "./views/Form.jsx";
import { UserDetails } from "./views/UserDetails.jsx";


export const Layout = () => {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <h1 className="text-center text-primary">React Router DOM</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/card' element={<Card />} />
          <Route path='/todolist-fetch' element={<TodoListFetch />} />
          <Route path='/users' element={<Users />} />
          <Route path='/user/:id' element={<UserDetails />} />
          <Route path="/simple-counter" element={<SimpleCounterBonus/>}/>
          <Route path='/todolist' element={<TodoList/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path='*' element={<h1>404 - Not found!</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
