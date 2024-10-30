import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_END_POINT_CHECK_SESSION } from '../api/Global';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch(`${API_END_POINT_CHECK_SESSION}`, {
          method: "GET",
          credentials: "include",
        });

        const data = await response.json();
        if (data.success) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error checking session:", error);
        setIsAuthenticated(false); // Handle error by setting as not authenticated
      }
    };

    checkSession();
  }, []);

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/admin/signin");
    }
  }, [isAuthenticated, navigate]);

  // Show a loading state while the authentication status is being determined
  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Or a spinner component
  }

  return isAuthenticated ? children : null;
};

export default ProtectedRoute;
