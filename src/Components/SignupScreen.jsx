import React, { useState } from 'react'
import "../CSS/SignupScreen.css"

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase'

const SignupScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //   Code for create a new user
    const signup = async (e) => {
        e.preventDefault();

        await createUserWithEmailAndPassword(auth, email, password).then(cred => {
            console.log(cred);
        }).catch((error) => {
            alert(error.message);

        });
    }
    // Code for SignIn user
    const signin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password).then((authUser) => {
            console.log(authUser);
        }).catch((error) => {
            alert(error.message);
        });

    }

    return (
        <div className='signupScreen'>
            <form>
                <h1>Sign In</h1>
                <input type="email" placeholder='Email'
                    onChange={(e) => { setEmail(e.target.value) }}
                    id="email"
                    autoComplete='off' />
                <input type="password" placeholder='Password'
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    id="password"
                    autoComplete='off' />
                <button type="submit" onClick={signin}>Sign In</button>
                <h4 id="text"><span className='grey'>New to Netflix? </span> <span className='link' onClick={signup}>Sign up now.</span></h4>

            </form>
        </div>
    )
}

export default SignupScreen