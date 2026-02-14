// import { createContext, useState, useContext, useEffect } from 'react';
// import { authService } from '../api/authService';

// const AuthContext = createContext();

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within AuthProvider');
//   }
//   return context;
// };

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Check if user is logged in on mount
//     const loadUser = async () => {
//       if (authService.isAuthenticated()) {
//         try {
//           const userData = await authService.getCurrentUser();
//           setUser(userData);
//         } catch (error) {
//           console.error('Failed to load user:', error);
//           authService.logout();
//         }
//       }
//       setLoading(false);
//     };
//     loadUser();
//   }, []);

//   const login = async (credentials) => {
//     const data = await authService.login(credentials);
//     const userData = await authService.getCurrentUser();
//     setUser(userData);
//     return data;
//   };

//   const signup = async (userData) => {
//     const data = await authService.signup(userData);
//     return data;
//   };

//   const logout = () => {
//     authService.logout();
//     setUser(null);
//   };

//   const value = {
//     user,
//     login,
//     signup,
//     logout,
//     isAuthenticated: !!user,
//     loading,
//   };

//   return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
// };




 
import { createContext, useState, useContext, useEffect } from 'react';
import { authService } from '../api/authService';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const userData = await authService.getCurrentUser();
          setUser(userData);
        } catch (error) {
          // Token expired or invalid - clear it
          console.log('Token invalid, clearing...');
          localStorage.removeItem('token');
          setUser(null);
        }
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const login = async (credentials) => {
    const data = await authService.login(credentials);
    try {
      const userData = await authService.getCurrentUser();
      setUser(userData);
    } catch (error) {
      console.error('Failed to get user after login:', error);
    }
    return data;
  };

  const signup = async (userData) => {
    return await authService.signup(userData);
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user, login, signup, logout,
      isAuthenticated: !!user,
      loading
    }}>
      {children}
    </AuthContext.Provider>
  );
};



