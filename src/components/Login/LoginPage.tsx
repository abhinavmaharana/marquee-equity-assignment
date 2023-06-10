import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const LoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    // const history = useHistory();
    
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        await login(username, password);
        // history.push('/dashboard');
    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginPage