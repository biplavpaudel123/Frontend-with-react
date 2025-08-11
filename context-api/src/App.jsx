import React from 'react'
import UserContextProvider from './contexts/UserProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  return (
    <UserContextProvider>
      <div>App</div>
      <Login/>
      <Profile/>
      </UserContextProvider>
  )
}

export default App