import PropTypes from 'prop-types';
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getIsAuthenticated } from "../features/auth/authSlice";

const PrivateRoute = ({ Component }) => {
    const isAuthenticated = useSelector(getIsAuthenticated);
    const location = useLocation();
    
    return isAuthenticated ? (
        <React.Fragment>
            <Component />
        </React.Fragment>
    ) : (
        <Navigate to="/" state={{ from: location }} replace />
    );
};

PrivateRoute.propTypes = {
      Component: PropTypes.elementType.isRequired,
  };

export default PrivateRoute;

