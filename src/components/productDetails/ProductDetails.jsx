import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductDetails.css'

const ProductDetails = () => {
    const {id} = useParams();

    const [value, setValue] = useState({});
    useEffect(() =>{
        fetch(`http://localhost:5000/laptops/${id}`)
        .then(res => res.json())
        .then(data => setValue(data))
    },[])
    console.log(value);
    return (
        <div className="product">
            <img src={value.img} className="product-image" />
            <div className="product-details">
                <h2 className="product-name">{value.title}</h2>
                <p className="product-description">{value.config}</p>
                <p className="product-price">${value.price}</p>
                <Link to='/' className="btn">Home</Link>
            </div>
        </div>
    );
};

export default ProductDetails;