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
        <div>
            <h1 className="loginpage">LoginPage</h1>
            <form onSubmit={handleFormSubmit}>
                <label className="usernamelogin">
                    Username:
                    <input
                        type="text"
                        value={user.username}
                        onChange={(e) => setUser({ ...user, username: e.target.value })}
                    />
                </label>
                <br />
                <label className="userpasswordlogin">
                    Password:
                    <input
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                </label>
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};



export default LoginPage;