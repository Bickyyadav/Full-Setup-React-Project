// import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" exact={true} element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App