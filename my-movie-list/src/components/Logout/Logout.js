import { useUserContext } from "../../contexts/UserContext";
import { logout } from "../../services/userService";
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";

const Logout = () => {
    const { user, userLogout } = useUserContext();
    const navigate = useNavigate();

    console.log(user);
    useEffect(() => {
        logout(user.accessToken)
        .then(() => {
            userLogout();
            navigate('/');
        });
    })
    
    return null;
}

export default Logout;