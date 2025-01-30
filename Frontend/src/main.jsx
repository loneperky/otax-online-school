import React from 'react'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import HomePage from './pages/homePage'
import ContactPage from './pages/ContactPage'
import ErrorPage from './pages/404'
import Dashboard from './pages/dashboard'
import Developer from './pages/Developer'
import Login from './pages/Login'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
        <Routes>
         <Route path='/' element={<HomePage />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
         <Route path='/contact' element={<ContactPage />}/>
         <Route path='/developers' element={<Developer />}/>
         <Route path='/login' element={<Login />}/>
         <Route path='/*' element={<ErrorPage />}/>
        </Routes>
    </Router>
    
  
  </React.StrictMode>,
)
