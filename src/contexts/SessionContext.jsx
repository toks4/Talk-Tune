import { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const SessionContext = createContext()

const SessionContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState()
  const [user, setUser] = useState('')


  const verifyToken = async jwt => {
    try {
      let verifiedUser = await fetch('http://localhost:5005/auth/verify', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      let oat = await verifiedUser.json()
      console.log(oat)

      setUser(oat.user)

      setToken(jwt)
      setIsAuthenticated(true)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      window.localStorage.removeItem('authToken')
    }
  }

  useEffect(() => {
    const localToken = window.localStorage.getItem('authToken')
    verifyToken(localToken)
  }, [])

  useEffect(() => {
    console.log(token)
    if (token) {
      window.localStorage.setItem('authToken', token)
      if (!isAuthenticated) {
        setIsAuthenticated(true)
      }
    }
  }, [token])

  const navigate = useNavigate()

  const logoutFunction = ()=>{
    window.localStorage.removeItem('authToken') 
    setIsAuthenticated(false)
    navigate('/')

  }

  return (
    <SessionContext.Provider value={{ setToken, isAuthenticated, isLoading, logoutFunction, setUser, user }}>
      {children}
    </SessionContext.Provider>
  )
}

export default SessionContextProvider