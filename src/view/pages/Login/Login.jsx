import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { login } from "../../../controllers/userRedux";
import * as repo from "../../../api/authRepository";
import './Login.css';
import { isEmpty } from '../../../helpers/utils';

export const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = await repo.login({ email, password });
        if (isEmpty(data)) return
        const { token, expires, user } = data;

        dispatch(
            login({
                ...user,
                loggedIn: true,
            })
        );
        localStorage.setItem('access_token', JSON.stringify({ "value": token, "expires_in": expires }));

        setEmail("");
        setPassword("");
    };
    return (
        <main className="form-signin">
            <form onSubmit={(e) => handleSubmit(e)} >
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">
                    Sign in
                </button>
                <p className="mt-5 mb-3 text-muted">© 2017–2021</p>
            </form>
        </main>
    );
}
