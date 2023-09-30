import React, {createContext, useContext, useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';

type UserProps = {
  token?: string;
  hasNotification?: boolean;
};

type UserContextProps = {
  user: UserProps | null;
  getUserToken(): void;
  updateUserToken(token: string): void;
  logout(): void;
  hasInternet: boolean;
};

const UserContext = createContext<UserContextProps>({} as UserContextProps);

const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [hasInternet, setHasInternet] = useState(false);

  function getUserToken() {
    if (user) {
      return user.token;
    }
  }

  function updateUserToken(token: string) {
    setUser({token});
  }

  function logout() {
    setUser(null);
  }

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected !== null) {
        setHasInternet(state.isConnected);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider
      value={{user, updateUserToken, getUserToken, logout, hasInternet}}>
      {children}
    </UserContext.Provider>
  );
};

function useUser() {
  const context = useContext(UserContext);
  return context;
}

export {UserProvider, useUser, UserContext};
