import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Templates/Header'
import About from './Templates/About'
import Login from './Templates/Login'
import Register from './Templates/Register'
import Dashboard from './includes/Dashboard'
import Home from './includes/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import RegisterEnquiry from './modules/CRM/RegisterEnquiry'

function App() {
  
  return (
    <div>
      <BrowserRouter>
        <Header/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='registerenquiry' element={<RegisterEnquiry/>}/>
          <Route path='dashboard/*' element={<Dashboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
