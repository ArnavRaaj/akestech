import React from 'react'
import './Pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="pagination-container">
            {pageNumbers.map(number => (
                <li key={number} className="pagination-li">
                    <a onClick={() => paginate(number)} href="#" className="pagination-a">{number}</a>
                </li>
            ))}
        </div>
    )
}

export default Pagination
