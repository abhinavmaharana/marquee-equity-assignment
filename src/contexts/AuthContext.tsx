import React, { createContext, useState, useEffect } from 'react';
import { login, logout } from '../services/AuthService';

interface Props {
    children: React.ReactNode
}

interface User {
  username: string;
}

type AuthContextProps = {
  user: User | null;
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  token: null,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

export const AuthProvider: React.FC<Props> = ({ children } ) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Check if the user is already logged in (e.g., using a stored token)
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
      // You may also want to fetch the user profile here using the token
    }
  }, []);

  const handleLogin = async (username: string, password: string) => {
    try {
      const token = await login(username, password);
      setToken(token);
      // You may also want to fetch the user profile here using the token
      localStorage.setItem('token', token);
    } catch (error) {
      console.error('Login failed:');
      // Handle error or show error message to the user
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      setToken(null);
      setUser(null);
      localStorage.removeItem('token');
    } catch (error) {
      console.error('Logout failed:');
      // Handle error or show error message to the user
    }
  };


  return (
    <AuthContext.Provider value={{ user, token, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};