import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/home/Home";
import Layout from '../components/layout/Layout';
import Restocks from '../pages/collections/Restocks';
import BestSellers from '../pages/collections/BestSellers';
import Collection from '../pages/collections/Collection';

function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collection />} />
          <Route path="/collections/restocks" element={<Restocks />} />
          <Route path="/collections/best-sellers" element={<BestSellers />} />
          
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRoutes;