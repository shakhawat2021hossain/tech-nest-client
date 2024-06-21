import { useContext } from 'react';
import './Register.css';
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';
import { updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);
    // console.log(createUser);

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.password.value;
        // console.log(name, email, pass);

        if (pass.length < 6) {
            toast("pass must at least 6 char");
            return;
        }
        createUser(email, pass)
            .then(res => {
                toast("Successfully registered")
                navigate('/');
                //update profile
                const user = res.user
                updateProfile(user, {
                    displayName: name,
                    photoURL: "https://i.ibb.co/CnFPnNX/60bd653f-5d19-4bff-a70b-689fb13fc953.jpg"
                }).then(() => {
                    // Profile updated successfully!
                    console.log("Profile updated successfully!");
                    console.log(user);
                    console.log(user.displayName, user.photoURL);
                }).catch((error) => {
                    // An error occurred
                    console.error("Error updating profile:", error);
                });
                const img = user.photoURL;
                const userInfo = {
                    name, email, img
                }
                // console.log(userInfo);
                fetch('https://tech-nest-server-b2xo.onrender.com/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                form.reset();
            })
            .catch(err => console.log(err))

    }

    return (
        <div className='mx-2'>
            <div className="max-w-xl mx-auto px-2 container">
                <form onSubmit={handleRegister} className="create-account-form">
                    <h2>Create Account</h2>

                    <label>Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required>
                    </input>

                    <label>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required>
                    </input>

                    <label>Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required>
                    </input>
                    <button type="submit">Submit</button>
                    
                    <Link to='/login'>Already have an account?</Link>

                </form>

            </div>

        </div>
    );
};

export default Register;