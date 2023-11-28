import React from 'react'

import { logout } from '../Reducer'
import { useDispatch } from 'react-redux'
const Profile = () => {

  const dispatch = useDispatch()

  return (
    <div>

      <p>profile</p>

      <button onClick={() => dispatch(logout())} > logout</button>

    </div>
  )
}

export default Profile