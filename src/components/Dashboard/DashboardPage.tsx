import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import LogoutButton from '../Common/LogoutButton';
import TodoList from './TodoList';

const DashboardPage: React.FC = () => {
  const { token } = useContext(AuthContext);
  return (
    <div>
        <h2>Dashboard</h2>
        {token && (
        <>
          <p>Welcome! You are logged in.</p>
          <LogoutButton />
          <TodoList />
        </>
      )}
    </div>
  )
}

export default DashboardPage