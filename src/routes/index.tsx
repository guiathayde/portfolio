import { useCallback, ComponentType } from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import { Home } from '../pages/Home';
import { PrivacyPolicy } from '../pages/PrivacyPolicy';
import { TermsAndConditions } from '../pages/TermsAndConditions';

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
      <Route path="/privacy-policy" element={element(PrivacyPolicy)} />
      <Route
        path="/terms-and-conditions"
        element={element(TermsAndConditions)}
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Switch>
  );
}
