import { useEffect, useState } from "react";
import Product from "../product/Product";
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/laptops')
        .then(res => res.json())
        .then(data =>{
            setProducts(data);
        })
    }, [])
    return (
        <div className='products'>
            <h1>Available Laptops</h1>
            <div className="products-container">
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }

            </div>
        </div>
    );
};

export default Products;