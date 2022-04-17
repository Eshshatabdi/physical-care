import React from 'react';
import { Button, Form } from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()


    const navigateRegister = event => {
        navigate('/register')
    }
    // if (user) {
    //     navigate(from, { replace: true });
    // }
    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-center'>Please log in</h3>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New t Genius Car? <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>

        </div>
    );
};

export default Login;