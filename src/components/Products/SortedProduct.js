import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';

const SortedProduct = () => {

    const [sortedProducts, setSortedProducts] = useState([]);
    const getSortedProducts = async () => {
        try {
            const sortedProductsData = await axios.get("https://fakestoreapi.com/products?sort=desc");
            setSortedProducts(sortedProductsData.data)
            console.log("sorted data...", sortedProductsData.data);
        }
        catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
        getSortedProducts();
    }, [])

    return (
        <div className="product-listing">
            {sortedProducts
                ? sortedProducts.map((item) => {
                    return (
                        <div key={item.id} className="product-card">
                            <img src={item.image} alt="product image" className="product-image" />
                            <h3 className="product-title"> {item.title}</h3>
                            <div className="rating-container">
                                <span className="rating">{item.rating.rate} <AiFillStar /> </span>
                                <span className="count"> ({item.rating.count})</span>
                            </div>
                            <p className="product-price">$ {item.price}</p>
                            <Link to={`products/${item.id}`} className="view-details">View Details</Link>
                        </div>
                    )
                })
                : <h3>Loading Products...</h3>
            }
        </div>
    )
}

export default SortedProduct
