import React from 'react';
import './Header.css'; // Custom CSS for styling
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi'; // Importing Logout Icon
import logo from '../assets/Screenshot_2024-11-30_140238-removebg-preview.png';

const Header = ({ currentUser }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session/state (e.g., remove user data or token)
    localStorage.removeItem('currentUser'); // Example if using local storage for authentication
    navigate('/'); // Redirect to login page
  };

  return (
    <header className="header">
      {/* Left: Company Logo */}
      <div className="header-logo">
        <h1>
          <img className="logo" src={logo} alt="RoleGate" />
        </h1>
      </div>

      {/* Right: User Greeting */}
      <div className="header-user">
        <div className="greeting">
          <p className="user-welcome">
            Welcome{' '}
            <span className="bold">{currentUser.username || 'Guest'}</span>
          </p>
          <p className="user-role">{`${currentUser.role || 'User'}`}</p>
        </div>

        <FiLogOut
          className="logout-icon"
          onClick={handleLogout}
          title="Logout"
        />
      </div>
    </header>
  );
};

export default Header;
