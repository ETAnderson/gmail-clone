import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/user/userSlice';
import { auth, provider } from './firebase'
import { signInWithPopup } from '@firebase/auth'
import './Login.css'


function Login() {
    const dispatch = useDispatch();

    const signIn = () => {
        signInWithPopup(auth, provider)
       .then(({ user }) => {
           dispatch(login({
               displayName: user.displayName,
               email: user.email,
               photoUrl: user.photoUrl,
           }))
       })
       .catch((error) => alert(error.message));
    };

    return (
        <div className='login'>
            <div className="login__container">
                <p>Gmail Clone, for demonstration only</p>
                <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg" 
                    alt=''
                />
                <Button 
                    variant="contained" 
                    color= "primary" 
                    onClick={signIn}
                >Login</Button>
            </div>
        </div>
    )
}

export default Login
