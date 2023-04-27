import { useLocation, Navigate, Outlet} from 'react-router-dom';
import useAuth from '../hook/useAuth';



const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    return (
        auth?.user
        ? <Outlet />
        : <Navigate to="/login" state={{ from: location }} replace/>
    );
}

export default RequireAuth

/*
If the user is trying to access the page but isn't logged in were going to send the user back to the login:
(
        auth?.user
        ? <Outlet />
        : <Navigate to="/login" state={{ from: location }} replace/>
    )

<Navigate to="/login" state={{ from: location }} replace/>
were going to replace the login in their navigation history with the history that they came from
*/