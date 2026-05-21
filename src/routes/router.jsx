import { useContext } from 'react'
import { Navigate } from 'react-router'
import { AuthContext } from '../providers/AuthProvider'

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext)

  if (loading) {
    return <span className="loading loading-spinner loading-lg"></span>
  }

  if (user) {
    return children
  }

  return <Navigate to="/login" />
}

export default PrivateRoute