import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/google (1).png';
import github from '../../images/github-edit.png';



const OtherLoginSystem = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, gituser, gitloading, giterror] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorShow;
    if (error || giterror) {
        errorShow = <p className='text-danger'>Error:{error?.message} {giterror?.message} </p>


    }
    if (user || gituser) {
        navigate('/home')
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-primary w-50' ></div>
                <p className='mt-3 px-2' >or</p>
                <div style={{ height: '2px' }} className='bg-primary w-50' ></div>
            </div>
            {errorShow}


            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-light w-50 d-block mx-auto my-2'>
                    <img src={google} alt="" />
                    <span className='px-3'> Google Sign In</span></button>



                <button onClick={() => signInWithGithub()} className='btn btn-light w-50 d-block mx-auto my-2'>
                    <img src={github} alt="" />
                    <span className='px-3'> Github Sign In</span></button>


            </div>


        </div>
    );
};

export default OtherLoginSystem;