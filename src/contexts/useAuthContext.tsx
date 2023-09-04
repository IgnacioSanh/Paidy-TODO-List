import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';

interface AuthContext {
  isAuthenticated: boolean;
  changeAuthentication: (isAuthenticated: boolean) => void;
}

const authContextInitialValue: AuthContext = {
  isAuthenticated: false,
  changeAuthentication: () => 1,
};

export const authContext = createContext<AuthContext>(authContextInitialValue);

export function AuthProvider({children}: PropsWithChildren<{}>) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authContextValue: AuthContext = {
    isAuthenticated,
    changeAuthentication: (authenticationValue: boolean) =>
      setIsAuthenticated(authenticationValue),
  };

  return (
    <authContext.Provider value={authContextValue}>
      {children}
    </authContext.Provider>
  );
}

export function useAuthContext() {
  const context = useContext(authContext);
  if (context === undefined) {
    throw new Error('Context must be used within an Auth Provider');
  }
  return context;
}
