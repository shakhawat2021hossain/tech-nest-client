import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
    const { id } = useParams()
    const navigate = useNavigate();

    const [product, setProduct] = useState({});

    console.log(product);
    useEffect(() => {
        fetch(`https://laptop-shop-server-vert.vercel.app/laptops/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const handleEdit = async (e) => {
        e.preventDefault();
        // const formData = new FormData(e.target);
        // const newData = Object.fromEntries(formData.entries())
        // console.log(product, formData);
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const config = form.config.value;
        const brand = form.brand.value;
        const img = form.img.value

        const data = { title, price, config, brand, img };
        // console.log(data);

        fetch(`https://laptop-shop-server-vert.vercel.app/laptops/${product._id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        toast.success("Successfully edited!")
        form.reset();
        navigate('/dashboard/manage-products')


    }
    return (
        <div className='add-products'>
            <h1>Edit Product</h1>
            <form onSubmit={handleEdit} className="add-product-form">
                <input
                    defaultValue={product?.title}
                    type="text"
                    name="title"
                    placeholder="Title"
                    required
                />
                <input
                    defaultValue={product?.img}
                    type="text"
                    name="img"
                    placeholder="Image URL"
                    required
                />
                <input
                    defaultValue={product?.price}
                    type="text"
                    name="price"
                    placeholder="Price"
                    required
                />
                <textarea
                    defaultValue={product?.config}
                    name="config"
                    placeholder="Configaration"
                    required
                />
                <input
                    defaultValue={product?.brand}
                    type="text"
                    name="brand"
                    placeholder="Brand"
                    required
                />
                <button className='add-btn'>Confirm</button>
            </form>
        </div>
    );
};

export default EditProduct;