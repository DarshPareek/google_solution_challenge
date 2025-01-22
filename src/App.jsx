import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Community from './pages/Community/Community'
import JobSearch from './pages/JobSearch/JobSearch'
import Mentorship from './pages/Mentorship/Mentorship'
import Home from './pages/Home/Home'
import Profile from './pages/Forms/Profile'
import Notification from './pages/Notification/Notification'
import LoginForm from './pages/Forms/LoginForm'
import CreateAccount from './pages/Forms/CreateAccount'

const App = () => {
  return (
      <>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/community' element={<Community/>} />
          <Route path='/job' element={<JobSearch/>} />
          <Route path='/mentorship' element={<Mentorship/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/notification' element={<Notification/>} />
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/create' element={<CreateAccount/>}/>
        </Routes>
      </>
  )
}

export default App