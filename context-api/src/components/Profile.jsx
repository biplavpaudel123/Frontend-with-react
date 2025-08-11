import React, { useContext } from 'react'
import UserContext from '../contexts/UserContext'
function Profile() {
    const {user}=useContext(UserContext);
  return (
    <>
        {user? <h1>Welcome {user}</h1> : <h1>Not Logged In</h1>}
    </>
  )
}

export default Profile