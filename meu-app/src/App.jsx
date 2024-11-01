// import logo from './logo.svg';
import './App.css';
import { Login } from './Paginas/Login';
import CsvUploadForm from './CsvUploadForm';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>Pagina Inicial</h1>}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/CsvUploadForm' element={<CsvUploadForm />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;