import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import AppsIcon from '@mui/icons-material/Apps';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { Typography, Divider } from '@mui/material';
import logo from '../assets/convolve-logo.png';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="Convolve AI" />
      </div>
      <div className="sidebar-content">
        {/* Main Navigation */}
        <Typography variant="subtitle2" className="sidebar-heading">
          Main
        </Typography>
        <Link 
          to="/" 
          className={`sidebar-item ${location.pathname === '/' ? 'active' : ''}`}
        >
          {/* <HomeIcon />
          <span>Home</span>
        </Link>
        <Link 
          to="/dashboard" 
          className={`sidebar-item ${location.pathname === '/dashboard' ? 'active' : ''}`}
        > */}
          <DashboardIcon />
          <span>Dashboard</span>
        </Link>
        <Link 
          to="/applications" 
          className={`sidebar-item ${location.pathname === '/applications' ? 'active' : ''}`}
        >
          <AppsIcon />
          <span>Applications</span>
        </Link>
        <Link 
          to="/cameras" 
          className={`sidebar-item ${location.pathname === '/cameras' ? 'active' : ''}`}
        >
          <CameraAltIcon />
          <span>Cameras</span>
        </Link>


        <Link
          to="/live-demo"
          className={`sidebar-item ${location.pathname === '/live-demo' ? 'active' : ''}`}
        >
          <PlayCircleOutlineIcon /> {/* Make sure you have imported this icon */}
          <span>Live Demo</span>
        </Link>

        <Link 
          to="/gallery" 
          className={`sidebar-item ${location.pathname === '/gallery' ? 'active' : ''}`}
        >
          <PhotoLibraryIcon />
          <span>Detection Gallery</span>
        </Link>
        
        <Divider className="sidebar-divider" />
        
        {/* User Settings */}
        <Typography variant="subtitle2" className="sidebar-heading">
          User Settings
        </Typography>
        <Link 
          to="/profile" 
          className={`sidebar-item ${location.pathname === '/profile' ? 'active' : ''}`}
        >
          <PersonIcon />
          <span>Profile</span>
        </Link>
        <Link 
          to="/settings" 
          className={`sidebar-item ${location.pathname === '/settings' ? 'active' : ''}`}
        >
          <SettingsIcon />
          <span>Detection Settings</span>
        </Link>        
      </div>
    </div>
  );
};

export default Sidebar; 