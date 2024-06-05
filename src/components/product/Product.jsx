import React from 'react';
import './Product.css'
import { Link } from 'react-router-dom';
const Product = ({product}) => {
    const {_id, img, title, config, price, brand} = product

    return (
        <div className="laptop-card">
        <img src={img} className="laptop-img" />
        <div className="laptop-details">
            <h2 className="laptop-title">{title}</h2>
            <p className="laptop-description">{config}</p>
            <p className="laptop-origin"><strong>Brand:</strong> {brand}</p>
            <p className="laptop-price">${price}</p>
            <Link to={`/products/${_id}`}><button className="add-to-cart-btn">View Details</button></Link>
        </div>
    </div>
    );
};

export default Product;