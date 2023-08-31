import React from 'react'
import Nav from './Nav'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { signOut } from 'firebase/auth'
import { auth } from './firebase'
import '../CSS/profileScreen.css'

const ProfileScreen = () => {
    const user = useSelector(selectUser);

    return (
        <div className='profilePage'>
            <Nav />
            <div className="profileBody">
                <h1>Edit Profile</h1>
                <div className="profileInfo">
                    <img src="../user-avtar.png" alt="" />
                    <div className="profileDetail">
                        <h2>{user.email}</h2>
                        <div className="profilePlans">
                            <h3>Plans</h3>
                            <button className='signOut' onClick={() => {signOut(auth)}}>
                                Sign Out
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen