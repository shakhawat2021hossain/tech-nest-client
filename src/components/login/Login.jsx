import { useContext } from 'react';
import './Login.css'
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';
import { Link, json, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const navigate = useNavigate();

    const { loginUser, googleSignIn } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;
        console.log(email, pass);
        // const user = res.user;

        loginUser(email, pass)
            .then(res => {
                // console.log(res.user);
                navigate('/')
                toast("logged in successsfully")

                // const userEmail = { email }

                // axios.post('https://tech-nest-server-b2xo.onrender.com/jwt', userEmail, { withCredentials: true })
                //     .then(res => {
                //         console.log(res.data);
                //     })
            })
            .catch(err => {
                console.log(err);

            })
    }

    const handleGooglesignIn = () => {
        googleSignIn()
            .then(res => {
                const user = res.user
                // console.log(user);

                const name = user.displayName
                const email = user.email
                const img = user.photoURL
                const userInfo = {
                    name, email, img
                }
                fetch('https://tech-nest-server-b2xo.onrender.com/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        localStorage.setItem('token', data.token)
                    })

                toast("successfully logged in");
                navigate('/')
            })
            .catch(err => console.log(err))


    }

    return ( 
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleLogin} className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
                <h2 className="text-2xl mb-4 text-center">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm  mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="flex flex-col items-center justify-between">
                    
                    <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2" type="submit">Login</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mb-2" onClick={handleGooglesignIn} type="submit">Google Sign In</button>
                    <Link to='/register'>Don't have any Account? Register</Link>
                </div>
            </form>
        </div>
    );
};

export default Login;
