import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MainPage from './components/MainPage/mainPage';
import Oil from './components/Oil/Oil';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from './components/Contact/Contact';
import Shop from './components/shop/shop';
import Tub from './components/product/tub';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route exact path='/main' element={<MainPage/>}></Route>
      <Route exact path='/oil' element={<Oil/>}></Route>
      <Route exact path='/contact' element={<Contact/>}></Route>
      <Route exact path='/shop' element={<Shop/>}></Route>
      <Route exact path='/tub' element={<Tub/>}></Route>
    </Routes>
      <App />
    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
