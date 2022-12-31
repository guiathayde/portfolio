import { useCallback, ComponentType } from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import { Home } from '../pages/Home';

export function Routes() {
  const { user } = useAuth();

  const element = useCallback(
    (Component: ComponentType, isPrivate = false) => {
      return isPrivate === !!user ? (
        <Component />
      ) : (
        <Navigate to={isPrivate ? '/signin' : '/dashboard'} />
      );
    },
    [user],
  );

  return (
    <Switch>
      <Route path="/" element={element(Home)} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Switch>
  );
}
