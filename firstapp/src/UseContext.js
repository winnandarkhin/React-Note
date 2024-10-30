import { createContext, useContext } from 'react'

const AuthContext = createContext(undefined)

export const AuthContextProvider = ({ children }) => {
  const authUser = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    isAuthenticated: true,
  }
  return <AuthContext.Provider value={authUser}>
    {children}
  </AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
