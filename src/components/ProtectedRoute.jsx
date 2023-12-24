import { Navigate, Outlet } from 'react-router-dom'
// import { useAuth } from '../hooks/use-auth'

export const ProtectedRoute = ({ redirectPath }) => {
    if (!Boolean(localStorage.getItem('user'))) {
        return <Navigate to={redirectPath} replace={true} />
    }

    return <Outlet />
}
