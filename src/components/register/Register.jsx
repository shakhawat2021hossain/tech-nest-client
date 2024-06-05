import { useContext } from 'react';
import './Register.css';
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
    const { createUser, googleSignIn } = useContext(AuthContext);
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
                const img = res.photoURL
                const userInfo = {
                    name, email, img
                }
                fetch('https://laptop-shop-server-vert.vercel.app/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                form.reset();
                // console.log(res.user);

                //update profile
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-538.jpg?size=338&ext=jpg&ga=GA1.1.672697106.1717372800&semt=sph"
                })

                //send email for verification
                sendEmailVerification(res.user)
                    .then(() => toast("Check your mail for verification purpose."))
            })
            .catch(err => console.log(err))

    }

    const handleGooglesignIn = () => {
        googleSignIn()
            .then(data => {
                // console.log(res.user);
                const name = data.user.displayName
                const email = data.user.email
                const img = data.user.photoURL
                const userInfo = {
                    name, email, img
                }
                fetch('https://laptop-shop-server-vert.vercel.app/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem("token", data.token)
                        console.log(userInfo);
                        toast("successfully logged in");
                        navigate('/')
                    })
            })

    }

    return (
        <div>
            <div className="container">
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
                    <button onClick={handleGooglesignIn} className='login-btn' type="submit">Google Sign In</button>
                    <Link to='/login'>Already have an account?</Link>

                </form>

            </div>

        </div>
    );
};

export default Register;