import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/home/Home";
import Layout from '../components/layout/Layout';
import Restocks from '../pages/collections/Restocks';
import BestSellers from '../pages/collections/BestSellers';
import Collection from '../pages/collections/Collection';
import MenBracelets from "../pages/collections/men/Bracelets"
import MenNecklaces from "../pages/collections/men/Necklaces";
import MenRings from "../pages/collections/men/Rings";
import MenCufflinks from "../pages/collections/men/Cufflinks";

function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collection />} />
          <Route path="/collections/restocks" element={<Restocks />} />
          <Route path="/collections/best-sellers" element={<BestSellers />} />
          
          {/* Men */}
          <Route path="/collections/men-bracelets" element={<MenBracelets />} />
          <Route path="/collections/men-necklaces" element={<MenNecklaces />} />
          <Route path="/collections/men-rings" element={<MenRings />} />
          <Route path="/collections/men-cufflinks" element={<MenCufflinks />} />

          {/* Women */}
          
          
        </Routes>
      </Layout>
    </Router>
  );
}

export default AppRoutes;