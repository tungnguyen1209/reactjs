import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../store";
import {history} from "../../helpers";
import {UrlConstants} from "../../constants";
import {login} from "../../store/account/actions";

export const Login = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });
    const [submitted, setSubmitted] = useState(false);
    const loading = useSelector<AppState>((state) => state.account.loading);
    const token = useSelector<AppState>((state) => state.account.token);
    const {email, password} = inputs;
    const dispatch = useDispatch();
    useEffect(() => {
        if (token) {
            history.push(UrlConstants.HOME);
        }
    }, [dispatch, token]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setInputs((inputs) => ({...inputs, [name]: value}));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setSubmitted(true);
        if (email && password) {
            dispatch(login(email, password));
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-5">
                    <div className="card shadow-lg border-0 rounded-lg mt-5">
                        <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-floating mb-3">
                                    <input className={
                                        'form-control form-control-user ' +
                                        (submitted && !email ? 'is-invalid' : '')
                                    } id="inputEmail" type="email" name="email"
                                           onChange={handleChange}
                                           placeholder="name@example.com"/>
                                    {submitted && !email && (
                                        <div className='invalid-feedback'>
                                            Email is required
                                        </div>
                                    )}
                                    <label htmlFor="inputEmail">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input className={
                                        'form-control form-control-user ' +
                                        (submitted && !password ? 'is-invalid' : '')
                                    } id="inputPassword" type="password" name="password"
                                           onChange={handleChange}
                                           placeholder="Password"/>
                                    {submitted && !password && (
                                        <div className='invalid-feedback'>
                                            Password is required
                                        </div>
                                    )}
                                    <label htmlFor="inputPassword">Password</label>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                                    <a className="small" href="#">Forgot Password?</a>
                                    <button className='btn btn-primary'>
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
