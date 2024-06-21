import React from 'react';
import './AddProducts.css'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const AddProducts = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const handleAdd = async e =>{
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const img = form.img.value;
        const price = form.price.value;
        const config = form.config.value;
        const brand = form.brand.value;

        const data = {title, img, price, config, brand}
        // console.log(data);
        await fetch('https://tech-nest-server-b2xo.onrender.com/laptops', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${token}`
            },
            body: JSON.stringify(data)

        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            form.reset()
            toast.success("Product added successfully")
            navigate('/dashboard/manage-products')

        })

    }

    return (
        <div className='add-products'>
            <h1>Add Products</h1>
            <form onSubmit={handleAdd} className="add-product-form">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    required
                />
                <input
                    type="text"
                    name="img"
                    placeholder="Image URL"
                    required
                />
                <input
                    type="text"
                    name="price"
                    placeholder="Price"
                    required
                />
                <textarea
                    name="config"
                    placeholder="Configaration"
                    required
                />
                <input
                    type="text"
                    name="brand"
                    placeholder="Brand"
                    required
                />
                <button className='add-btn'>Add Product</button>
            </form>
        </div>
    );
};

export default AddProducts;