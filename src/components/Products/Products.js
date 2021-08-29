import React, { useEffect, useState } from 'react';
import './Products.css';
import { Link } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import Pagination from '../Pagination/Pagination';

const Products = ({ products, path }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentProducts = products.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div className="main-product-container">
            <div className="product-container">

                <div className="sidebar">
                    <Link to="/products/categories" className="category-btn">Our Categories</Link>
                    <Link to="/products/sort" className="category-btn">Sort</Link>
                </div>

                <div className="product-listing">
                    {currentProducts
                        ? currentProducts.map((item) => {
                            return (
                                <div key={item.id} className="product-card">
                                    <img src={item.image} alt="product image" className="product-image" />
                                    <h3 className="product-title"> {item.title}</h3>
                                    <div className="rating-container">
                                        <span className="rating">{item.rating.rate} <AiFillStar /> </span>
                                        <span className="count"> ({item.rating.count})</span>
                                    </div>
                                    <p className="product-price">$ {item.price}</p>
                                    <Link to={`/products/${item.id}`} className="view-details">View Details</Link>
                                </div>
                            )
                        })
                        : <h3>Loading Products...</h3>
                    }
                </div>
            </div>
            <Pagination postsPerPage={postsPerPage} totalPosts={products.length} paginate={paginate} />
        </div>
    )
}

export default Products