import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const LogoutButton: React.FC = () => {
    const { logout } = useContext(AuthContext);
  
    const handleLogout = async () => {
      await logout();
    };
  
    return (
      <button onClick={handleLogout}>Logout</button>
    );
};

export default LogoutButton