import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ categories }) => {
    return (
        <div className="category-container">
            <p className="container-des">We've the finest collection in</p >
            <div className="category-name-con">
                {
                    categories.map((item) => {
                        return (
                            <div key={item.id}>
                                <Link to={`/products/category/${item}`} className="category-name"><span>{item}</span> </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Sidebar
