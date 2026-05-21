import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router'

import MainLayout from './layouts/MainLayout'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Tutors from './pages/Tutors'
import TutorDetails from './pages/TutorDetails'
import AddTutor from './pages/AddTutor'
import MyTutors from './pages/MyTutors'
import MyBookedSessions from './pages/MyBookedSessions'
import NotFound from './pages/NotFound'

import PrivateRoute from './components/PrivateRoute'
import AuthProvider from './providers/AuthProvider'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/tutors',
        element: <Tutors />,
      },
      {
        path: '/tutor/:id',
        element: (
          <PrivateRoute>
            <TutorDetails />
          </PrivateRoute>
        ),
      },
      {
        path: '/addTutor',
        element: (
          <PrivateRoute>
            <AddTutor />
          </PrivateRoute>
        ),
      },
      {
        path: '/myTutors',
        element: (
          <PrivateRoute>
            <MyTutors />
          </PrivateRoute>
        ),
      },
      {
        path: '/myBookedSessions',
        element: (
          <PrivateRoute>
            <MyBookedSessions />
          </PrivateRoute>
        ),
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)