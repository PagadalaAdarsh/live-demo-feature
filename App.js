import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Settings from './pages/Settings';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import Dashboard from './pages/Dashboard';
import Gallery from './pages/Gallery';
import Applications from './pages/Applications';
import Cameras from './pages/Cameras';
import './App.css';
import LiveDemo from './pages/LiveDemo';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? children : <Navigate to="/login" />;
};

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <div className="app-container">
        {user && <Sidebar />}
        <main className={`main-content ${!user ? 'full-width' : ''}`}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={
              <PrivateRoute>
                <>
                  <Header />
                  <Dashboard />
                </>
              </PrivateRoute>
            } />
            <Route path="/profile" element={
              <PrivateRoute>
                <>
                  <Header />
                  <UserProfile />
                </>
              </PrivateRoute>
            } />
            <Route path="/settings" element={
              <PrivateRoute>
                <>
                  <Header />
                  <Settings />
                </>
              </PrivateRoute>
            } />
            <Route path="/applications" element={
              <PrivateRoute>
                <>
                  <Header />
                  <Applications />
                </>
              </PrivateRoute>
            } />
            <Route path="/cameras" element={
              <PrivateRoute>
                <>
                  <Header />
                  <Cameras />
                </>
              </PrivateRoute>
            } />
            <Route path="/gallery" element={<Gallery />} />

            <Route path="/live-demo" element={
  <PrivateRoute>
    <>
      <Header /> {/* Assuming you want to include the Header */}
      <LiveDemo />
    </>
  </PrivateRoute>
} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const AppWithAuth = () => (
  <AuthProvider>
    <App />
  </AuthProvider>
);

export default AppWithAuth; 