import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="card">
                    <h4 className='text-primary'>1. What is the difference between authorization and authentication</h4>
                    <p>Ans:Authorization determines the access of the resource that users can use. On the other hand, Authentication determine who the users is.  Furthermore, Authorization parameter set, implement and maintain by the organization,  however Authentication can be worked through password, one time pins,and biometrics information which provided by the users. Hence, Authentication is the first and foremost steps for identity. But Authorization always take place after Authentication. In addition, Authorization isn't visible or changeable by the users, but Authentication is visible or partially changeable by user. Authentication checks credential besides Authorization checks permission. Moreover,  both are means of access control of user.
                    </p>

                    <h4 className='text-primary'>2.Why are you using firebase? What other options do you have to implement authentication?</h4>
                    <p>Ans:Firebase is vastly using to develop high quality applications. Futher, it has also on easy integration process with both android and ios . Firebase  as well unity setups make which apps can be built for all leading mobile and web platform. To implement Authentication we can use password based,  mutlifactor, certificate based, biometrics such as- fingerprint, scanner,  and facial recognition,  eye scanner speaker recognition as well as token based Authentication.  In recent years Authentication technology is evolving rapidly. </p>

                    <h4 className='text-primary'>3. What other services does firebase provide other than authentication</h4>
                    <p>Ans:Other than Authentication those belows area we can use firebase.
                        That's Realtime Database, Google analytics,  and clodr storage which are powerful tools needed for mobile and web platform. It also allow us to do cloud messaging for cross platform apps, higher website traffic with apps indexing,  swift and secured web hosting,  higher accessibility to machine learning apis, crash reporting for swift bugs fixing, optimized app performance,  and push notification for target messing.
                    </p>


                </div>
            </div>


        </div>
    );
};

export default Blogs;