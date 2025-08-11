import React, { useContext,useState } from 'react'
import UserContext from '../contexts/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser}= useContext(UserContext);

    const handleSubmit=(e)=>{
            e.preventDefault();
            setUser(username);
    }
  return (
        <>
        <input type="text" placeholder='username' onChange={(e)=> setUsername(e.target.value)} value={username} />
        <input type="text" placeholder='password' onChange={(e)=> setPassword(e.target.value)} value={password}/>
        <button onClick={handleSubmit}>Submit</button>
        </>
)
}

export default Login