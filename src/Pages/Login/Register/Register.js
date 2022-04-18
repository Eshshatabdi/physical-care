import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import OtherLoginSystem from '../../OtherLoginSystem/OtherLoginSystem';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading




    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handlenameBlur = event => {
        setName(event.target.value);
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    const handleCreateUser = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError('your two password did not matched')
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer')
            return;
        }

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home')

    };
    // if (user) {
    //     console.log(user)
    // }
    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-center text-primary'>Please Register</h3>
            <Form onSubmit={handleCreateUser} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handlenameBlur} type="text" placeholder="Name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPasswordBlur} type="password" placeholder="Password" required />
                </Form.Group>

                <p className='text-danger'>{error}</p>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>
                Already have an account? <Link className='form-link text-decoration-none ' to='/login'>Please Login</Link>
            </p>
            <OtherLoginSystem></OtherLoginSystem>

        </div>

    );
};

export default Register;