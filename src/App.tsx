import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import LoginPage from './components/Login/LoginPage';
import DashboardPage from './components/Dashboard/DashboardPage';
import PrivateRoute from './components/Common/PrivateRoute';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/dashboard" component={DashboardPage} />
          <Redirect to="/login" />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
