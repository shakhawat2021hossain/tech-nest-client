import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import './Profile.css';
import { Link } from "react-router-dom";

const Profile = () => {
    const {user} = useContext(AuthContext)
    const [singleUser, setSingleUser] = useState({});
    useEffect(() =>{
        fetch(`https://laptop-shop-server-vert.vercel.app/users/${user?.email}`)
        .then(res => res.json())
        .then(data => setSingleUser(data))
    },[])
    // console.log(singleUser);
    return (
        <div className="profile">
            <div className="profile-card">
                <img src={singleUser?.img} className="profile-card__image" />
                <h2 className="profile-card__name">{singleUser?.displayName}</h2>
                <p className="profile-card__email">{singleUser?.email}</p>
                <p className="profile-card__email">{singleUser?.country}</p>
                <p className="profile-card__email">{singleUser?.birth}</p>
                <Link to={`/dashboard/users/${singleUser._id}`}>Update Profile</Link>
            </div>
        </div>
    );
};

export default Profile;