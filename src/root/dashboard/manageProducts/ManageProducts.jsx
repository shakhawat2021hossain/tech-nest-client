import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const ManageProducts = () => {

    const [products, setProducts] = useState([]);
    const loadData = () => {
        fetch('https://tech-nest-server-b2xo.onrender.com/laptops')
            .then(res => res.json())
            .then(data => setProducts(data))
    }
    useEffect(() => {
        loadData();
    }, [])

    const token = localStorage.getItem('token')


    const handleDelete = (id) => {
        fetch(`https://tech-nest-server-b2xo.onrender.com/laptops/${id}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Successfully Deleted the product");
                loadData();
            })
    }

    return (
        <div className="overflow-x-auto mx-auto">
            <h1>Manage Products</h1>
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {products.map((item, index) => (
                        <tr key={item._id}>
                            <td>{index+1}</td>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.brand}</td>

                            <td className='flex'>
                                <button className='edit-btn mr-2'><Link to={`/dashboard/edit/${item._id}`}>Edit</Link></button>
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
