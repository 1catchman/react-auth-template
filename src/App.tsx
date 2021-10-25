import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { AlertProvider } from './context/AlertContext';

import { theme } from './utils/theme';

import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import PasswordResetPage from './pages/PasswordResetPage';
import CustomAlert from './components/CustomAlert';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <AlertProvider>
            <Navbar />
            <Container maxWidth="md" sx={{ mt: 8 }}>
              <Switch>
                <Route exact path="/">
                  <HomePage />
                </Route>
                <PrivateRoute path="/signin">
                  <SignInPage />
                </PrivateRoute>
                <PrivateRoute path="/signup">
                  <SignUpPage />
                </PrivateRoute>
                <Route path="/password-reset">
                  <PasswordResetPage />
                </Route>
              </Switch>
              <CustomAlert />
            </Container>
          </AlertProvider>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
