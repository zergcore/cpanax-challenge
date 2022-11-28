import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout'
import Home from '../containers/Home';
import Users from '../containers/Users';
import Products from '../containers/Products';
import Flow from '../containers/Flow';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/usuarios" element={<Users />}/>
          <Route path="/productos" element={<Products />}/>
          <Route path="/flow" element={<Flow />}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;