import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link } from "react-router-dom";

const Profile = () => {
    const { user } = useContext(AuthContext)
    const [singleUser, setSingleUser] = useState();
    useEffect(() => {
        fetch(`https://tech-nest-server-b2xo.onrender.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setSingleUser(data))
    }, [])
    console.log(singleUser);
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="max-w-xl hero-content flex-col bg-white rounded-lg my-4">
                <img src={singleUser?.img} className="w-full rounded" />
                <div>
                    <h2 className="text-5xl font-bold">{singleUser?.name}</h2>
                    <p>{singleUser?.email}</p>
                    <p>{singleUser?.country}</p>
                    <p>{singleUser?.birth}</p>

                    <button className="btn btn-primary"><Link to={`/dashboard/users/${singleUser?._id}`}>Update Profile</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Profile;

{/* <div className="profile">
            <div className="profile-card">
                <img src={singleUser?.img} className="profile-card__image" />
                <h2 className="profile-card__name">{singleUser?.displayName}</h2>
                <p className="profile-card__email">{singleUser?.email}</p>
                <p className="profile-card__email">{singleUser?.country}</p>
                <p className="profile-card__email">{singleUser?.birth}</p>
                <Link to={`/dashboard/users/${singleUser._id}`}>Update Profile</Link>
            </div>
        </div> */}