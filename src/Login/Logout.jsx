import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../Reducer'
const Logout = () => {
    const dispatch = useDispatch()
    return (
        <div>
            <p>your are Already logged in </p>
            <button onClick={() => dispatch(logout())}>LogOut</button>
        </div>
    )
}

export default Logout