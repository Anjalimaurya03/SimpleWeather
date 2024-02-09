import Login from './pages/Login'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import { Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './routes/PrivateRoute'
import { AuthProvider } from './context/AuthContext'

function App() {
 

  return (
    
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<PrivateRoute><Homepage/></PrivateRoute>} />
      </Routes>
    </AuthProvider>
    
  )
}

export default App
