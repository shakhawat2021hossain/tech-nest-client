import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { useNavigate, useParams } from 'react-router-dom';
import './UpdateProfile.css'
const UpdateProfile = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState({});
    // console.log(user);

    useEffect(() => {
        fetch(`https://laptop-shop-server-vert.vercel.app/users/get/${id}`)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const country = form.country.value;
        const birth = form.birth.value;
        const img = form.img.value

        const data = { title, birth, country, img };
        // console.log(data);

        fetch(`https://laptop-shop-server-vert.vercel.app/users/get/${user?._id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        toast.success("Successfully updated!")
        form.reset();
        navigate('/dashboard')


    }
    return (
        <div className='add-user'>
            <h1>Update Profile</h1>
            <form onSubmit={handleUpdate} className="add-user-form">
                <input
                    defaultValue={user?.name}
                    type="text"
                    name="name"
                    placeholder="Title"
                    required
                />
                <input
                    defaultValue={user?.img}
                    type="text"
                    name="img"
                    placeholder="Image URL"
                    required
                />
                <input
                    defaultValue={user?.country}
                    type="text"
                    name="country"
                    placeholder="Country"
                />
                <input
                    defaultValue={user?.birth}
                    type='text'
                    name="birth"
                    placeholder="Date of Birth"
                />
                <button className='add-btn'>Confirm</button>
            </form>
        </div>
    );
};

export default UpdateProfile;