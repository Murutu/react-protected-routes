import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/*" element={<App />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

/*
BrowserRouter => It stores the current location of the browsers address bar using clean URLs and navigates
using the browser's built in history stack 
/* will have the routes & an asteric because we will have routes nested inside of it

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
  <Route path="/*" element={<App />}/>
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
)
*/
