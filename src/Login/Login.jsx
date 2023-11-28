import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../Reducer'
const Login = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <p>You are Logged out please Log in</p>
            <button onClick={() => { dispatch(login()), alert("You are logged IN") }}>LogIn</button>
        </div>
    )
}

export default Login