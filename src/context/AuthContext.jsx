import axios from 'axios'
import React, { createContext, useContext, useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  // const [authToken, setAuthToken] = useState()
  const [userData, setUserData] = useState()
  // const [isLoading, setIsLoading] = useState()

  // const navigate = useNavigate()
  useEffect(() => {
    const storedToken = localStorage.getItem('authToken')

    const fetchUserData = async () => {
      const formData = {
        auth_token: storedToken,
      }

      try {
        const response = await axios.post(
          'http://localhost:5000/api/auth/verify-token',
          formData,
        )

        console.log('Data from API:', response.data)
        setUserData(response.data)
      } catch (error) {
        console.error('API Error:', error)
      }
    }
    if (storedToken) {
      fetchUserData()
    }
  }, [])

  const login = (token) => {
    localStorage.setItem('authToken', token)
    // setAuthToken(token)
  }

  const logout = () => {
    localStorage.removeItem('authToken')
    // navigate('/')
    // setAuthToken(null)
  }

  const isAuthenticated = () => {
    const storedToken = localStorage.getItem('authToken')
    if (storedToken) {
      return true
    } else {
      return false
    }
  }

  return (
    <AuthContext.Provider value={{ userData, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
