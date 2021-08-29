import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
        <div className="inner-home-container">
            <h1 className="home-header">Welcome to <span className="wayfarlon">XYZ commerce</span></h1>
            <p className="home-desc">
                A multi store online shop for electronics, jewelery & clothing items in India. We are 24*7 open for all to buy accessories at an extremely affordable price.
            </p>

            <Link to="/products">
                <button className="shop-router-btn">
                    Shop Now
                </button>
            </Link>
        </div>
    </div>
    )
}

export default Home
