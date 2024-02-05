import React from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { useAuth } from '@clerk/clerk-react';
const ProtectedRoute = () => {
  const navigate = useNavigate();
    const location = useLocation();
  const { isSignedIn } = useAuth();
  
    const isAuthenticated = isSignedIn ?? true;
    
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/', { state: { from: location }, replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  return isAuthenticated ? <Outlet /> : null;
};


export default ProtectedRoute