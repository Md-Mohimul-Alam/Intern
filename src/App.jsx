import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/dashboard';
import About from './components/About';
import Contact from './components/Contact';
import Privacy from './components/Privacy_policy';
import Term from './components/Terms-of-use';
import Footer from './components/Footer/footer';
import TopCategories from './components/TopCatagory';
import CategoryPage from './components/Category_page';
import { CartProvider } from './components/ContextApi';

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Terms-of-use" element={<Term />} />
        <Route path="/Privacy_policy" element={<Privacy />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/categories" element={<TopCategories />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
