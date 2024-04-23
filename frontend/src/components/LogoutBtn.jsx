import React from 'react';
import { useNavigate } from 'react-router-dom';
import { removeUserToken } from "../utils/removeUserToken";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout actions (e.g., clear authentication state)
    // For example, if using local storage to manage authentication state:
    removeUserToken(); // Clear token from local storage

    // Redirect to the login page
    navigate('/login');
    navigate(0);
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
