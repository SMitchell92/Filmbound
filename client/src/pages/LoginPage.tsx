import React, { useState } from 'react';
import Auth from '../utils/auth';

interface UserLoginInterface {
    username: string;
    password: string;
}

const LoginPage: React.FC = () => {
    const [user, setUser] = useState<UserLoginInterface>({
        username: '',
        password: '',
    });

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                if (data.token) {
                    Auth.login(data.token);
                } else {
                    console.error('Login failed');
                }
            }
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="col-md-6 col-lg-2 bg-light bg-opacity-25 rounded-3 p-4 shadow-lg">
            <h1 className="loginpage">Login</h1>
            <br></br>
            <form onSubmit={handleFormSubmit}>
                <div className="username mb-3">
                    {/* Username: */}
                    <input
                        className='form-control w-100'
                        placeholder='Username'
                        type="text"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                    />
                </div>
                <br />
                <div className="userpasswordlogin mb-2">
                    {/* Password: */}
                    <input
                    className='form-control'
                        placeholder='Password'
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                </div>
                <br />
                <button className="btn btn-primary w-75 mb-1" type="submit">Login</button>
            </form>
            </div>
        </div>
    );
};



export default LoginPage;