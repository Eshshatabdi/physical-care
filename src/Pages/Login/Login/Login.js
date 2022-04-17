import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation();
    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);




    let from = location.state?.from?.pathname || "/";
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    };
    const handleUserLogIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }




    const navigateRegister = event => {
        navigate('/register')
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (user) {
        navigate('/home')
    }
    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-center'>Please log in</h3>
            <Form onSubmit={handleUserLogIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                </Form.Group>
                <p style={{ color: 'red' }}>{error?.message}</p>
                {
                    loading && <h4>Loading....</h4>

                }

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p>New to doctors chamber? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>

        </div>
    );
};

export default Login;