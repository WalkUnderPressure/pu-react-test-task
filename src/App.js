import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Routes,
  Route,
} from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Products from "./pages/products";
import Product from "./pages/product";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route exact path="/products/:productId" element={<Product />} />
          <Route exact path="/products" element={<Products />} />
          <Route path="*" element={<Navigate replace to="/products" />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
