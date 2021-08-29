import React from 'react'
import { Link, useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { FiArrowLeftCircle } from "react-icons/fi"

const ProductDetails = ({ products }) => {
    
    const { productId } = useParams();
    const productItem = products.find((item) => item.id === Number(productId));

    return (
        <div className="product-details-container">
            <div key={productItem.id} className="product-card product-details-card">
                <div className="img-container">
                    <img src={productItem.image} alt="product image" className="product-image" />
                    <Link to="/products" className="to-products-btn"><FiArrowLeftCircle /></Link>
                </div>
                <h3 className="product-title"> {productItem.title}</h3>
                <div className="rating-container">
                    <span className="rating">{productItem.rating.rate} <AiFillStar /> </span>
                    <span className="count"> ({productItem.rating.count})</span>
                </div>
                <p className="product-price">$ {productItem.price}</p>
                <p className="product-description">{productItem.description}</p>
            </div>
        </div>
    )
}

export default ProductDetails
