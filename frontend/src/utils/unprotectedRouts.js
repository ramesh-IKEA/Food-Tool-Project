import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import localStorage from '../services/localStorage'
const UnProtectedRoute = (props) => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    let ufunction = localStorage.get('user-function');
    let next = ufunction === 'store' ? '/case_list' : '/dashboard/new_cases'
    const checkUserToken = () => {
        const userToken = localStorage.get('user-token');
        if (userToken || userToken !== 'undefined') {
            setIsLoggedIn(true);
          
            return navigate(next);
        }
        setIsLoggedIn(false);
        return navigate(next);
    }
    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn]);
    return (
        <React.Fragment>
            {
                !isLoggedIn ? props.children : null
            }
        </React.Fragment>
    );
}
export default UnProtectedRoute;