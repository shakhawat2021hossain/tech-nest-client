import React, { useEffect, useState } from 'react';
import './ManageProducts.css';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);
    const loadData = () =>{
        fetch('https://laptop-shop-server-vert.vercel.app/laptops')
        .then(res => res.json())
        .then(data => setProducts(data))
    }
    useEffect(() =>{
        loadData();
    },[])


    const handleDelete = (id) =>{
        fetch(`https://laptop-shop-server-vert.vercel.app/laptops/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            toast.success("Successfully Deleted the product");
            loadData();
        })
    }

    return (
        <div className='manage-products'>
            <h1>Manage Products</h1>
            <table>
                <thead>
                    <tr>
                        {/* <th>ID</th> */}
                        <th>Title</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {products.map(item => (
                        <tr key={item._id}>
                            {/* <td>{item._id}</td> */}
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.brand}</td>

                            <td className='action'>
                                <button className='edit-btn'><Link to={`/dashboard/edit/${item._id}`}>Edit</Link></button>
                                <button onClick={()=> handleDelete(item._id)} className='dlt-btn'>Delete</button>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;
