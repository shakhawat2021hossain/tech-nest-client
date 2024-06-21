import { useEffect, useState } from "react";
import Product from "../product/Product";
// import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://tech-nest-server-b2xo.onrender.com/laptops')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [])
    
    const [searchText, setSearchText] = useState('')

    const getSearchText = (e) =>{
        e.preventDefault()
        setSearchText(e.target.value.toLowerCase())

    }
    const handleSearch = () => {
        const search = products.filter(item => item.title.toLowerCase().includes(searchText))
        setProducts(search)
    }
    return (
        <div className="max-w-7xl mx-auto">
            <h1>Available Laptops</h1>
            <div className="text-center">
                <input onChange={getSearchText} type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
                <button onClick={handleSearch} className="btn btn-accent w-auto">Search</button>

            </div>
            <div className="w-full grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }

            </div>
        </div>
    );
};

export default Products;