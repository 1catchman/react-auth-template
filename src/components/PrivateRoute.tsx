import * as React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';
import { useAlert } from '../context/AlertContext';

interface PropChildren {
  children: React.ReactNode;
  [key: string]: any;
}

export default function PrivateRoute({
  children,
  ...rest
}: PropChildren) {
  const { currentUser } = useAuth();
  const snackbar = useAlert();

  React.useEffect(() => {
    if (!(currentUser === null)) {
      snackbar.show('You already authorized', 'warning');
    }
  }, [currentUser, snackbar]);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser === null ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
