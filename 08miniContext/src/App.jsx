import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
//import User from '../../07reactRouter/src/components/User/User'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>Chai aur code </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
