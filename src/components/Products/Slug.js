import React from 'react'
import { useParams } from 'react-router-dom';
import { AiFillStar, AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Slug = ({ products }) => {
    const { slugs } = useParams();
    // console.log("from slugs....", { slugs });
    // console.log("from categories.....", { categories })
    const productsFromCategory = products.filter(product => product.category === slugs);
    // console.log("from products of category...", productsFromCategory);

    return (
        <div className="slug-container">
            <div className="slug-head">
                <h2>Our Finest in {slugs}</h2>
                <Link to="/products/categories" className="back-arrow"> <AiOutlineArrowLeft />Categories</Link>
            </div>

            <div className="slug-items">
                {productsFromCategory.map((item) => {
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
                })}
            </div>
        </div>
    )
}

export default Slug
