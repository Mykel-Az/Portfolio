import React from 'react'
import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
// import App from './App.tsx'
import Portfolio from './pages/Portfolio.tsx';

ReactDom.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <BrowserRouter>    
    <Portfolio />
  </BrowserRouter>
  </React.StrictMode>,
)
