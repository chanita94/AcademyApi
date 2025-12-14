import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from "./contexts/AuthContext";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home'
import Login from './components/login/Login';
import Register from './components/register/Register';
import CourseSection from './components/course-section/CourseSection';
import CourseDetails from './components/course-section/course-details/CourseDetails'
import Contacts from './components/contacts/Contacts';
import About from './components/about/About';
import UserSection from './components/user-section/UserSection'

import './App.css';

function App() {


  return (
    <AuthProvider>
      <div className='d-flex flex-column min-vh-100'>
        <Header />
        <main>

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/courses' element={<CourseSection />} />
            <Route path='/courses/:course_id' element={<CourseDetails />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/about' element={<About />} />
            <Route path='/users' element={<UserSection />} />
          </Routes>

        </main>
        <Footer />
      </div>
    </AuthProvider>
  )
}

export default App
