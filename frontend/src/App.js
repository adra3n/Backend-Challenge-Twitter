import React, { useState, useEffect } from 'react'
import Welcome from './modules/welcome'
import Home from './modules/home'
import Register from './modules/register'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      navigate('/home')
    }
  }, [token])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} />
        <Route
          path="/welcome"
          element={<Welcome setUser={setUser} setToken={setToken} />}
        />
        <Route path="/home" element={<Home user={user} token={token} />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

// switch (page) {
//   case 'home':
//     return (
//       <div className="App">
//         {' '}
//         <Home user={user} token={token} />{' '}
//       </div>
//     )

//   default:
//     return (
//       <div className="App">
//         <Welcome setUser={setUser} setToken={setToken} setPage={setPage} />{' '}
//       </div>
//     )
// }

export default App
