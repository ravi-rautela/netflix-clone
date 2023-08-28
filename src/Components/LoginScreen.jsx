import React, { useState } from 'react'
import '../CSS/LoginScreen.css'
import SignupScreen from '../Components/SignupScreen';

const LoginScreen = () => {
    const [signIn, setSignIn] = useState(false);

    return (
        <>

            <div className="login-screen">
                <div className="login-background">
                    <img className='login-logo' src="../netflix.png" alt="" />

                    <button className='login-btn' onClick={()=>setSignIn(true)}>Sign In</button>

                    <div className="loginScreen-gradient" />
                </div>
                {/* Write some code for login Body */}
                <div className="loginScreen-body">
                    {
                        signIn ? (<SignupScreen />) : (
                            <>
                                <h1>Unlimited films, TV programs and more.</h1>
                                <h2>Watch anywere. Cancel at any time. </h2>
                                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

                                <div className="login-input">
                                    <form>
                                        <input type="email" placeholder='Email Address' />
                                        <button className='login-getStarted-btn' onClick={()=>setSignIn(true)}>GET STARTED</button>
                                    </form>
                                </div>
                            </>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default LoginScreen