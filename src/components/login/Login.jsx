import { useContext } from 'react';
import './Login.css'
import { AuthContext } from '../../provider/AuthProvider';
import toast from 'react-hot-toast';
import { Link, json, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const {loginUser, googleSignIn} = useContext(AuthContext);

    const handleLogin = (e) =>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;
        console.log(email, pass);

        loginUser(email, pass)
        .then(res =>{
            console.log(res.user);
            const user = res.user

            if(user.emailVerified){
                form.reset();
                toast("Successfully Logged In");
                navigate('/')
            }
            else{
                toast("please verify your email");
            }
        })
        .catch(err => {
            console.log(err.message);

        })
    }

    const handleGooglesignIn = () =>{
        googleSignIn()
        .then(data =>{
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
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-form">
                <h2>Login</h2>
                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required>
                    </input>
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required>
                    </input>
                </div>
                <button className='login-btn' type="submit">Login</button>
                <button onClick={handleGooglesignIn} className='login-btn' type="submit">Google Sign In</button>
                <Link to='/register'>Don't have any Account? Register</Link>
            </form>


            
        </div>
    );
};

export default Login;
