import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import { useState, useEffect } from 'react';
import axios from "axios"
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Products/Sidebar';
import ProductDetails from './components/Products/ProductDetails';
import Slug from './components/Products/Slug';
import SortedProduct from './components/Products/SortedProduct';

function App() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      const productsData = await axios.get("https://fakestoreapi.com/products");
      setProducts(productsData.data)
    }
    catch (err) {
      console.error(err);
    }
  }

  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      const categoryData = await axios.get("https://fakestoreapi.com/products/categories");
      setCategories(categoryData.data)
    }
    catch (err) {
      console.error(err);
    }
  }
  useEffect(() => {
    getProducts();
    getCategories();
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/products/:productId" element={<ProductDetails products={products} />} />
        <Route path="/products/categories" element={<Sidebar categories={categories} />} />
        <Route path="/products/sort" element={<SortedProduct products={products} />} />
        <Route path="/products/category/:slugs" element={<Slug products={products} categories={categories} />} />
      </Routes>
    </div>
  );
}

export default App;
