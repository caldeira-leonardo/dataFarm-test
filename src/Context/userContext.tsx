import React, {createContext, useContext, useState} from 'react';

type UserProps = {
  token: string;
};

type UserContextProps = {
  user: UserProps | null;
  getUserToken(): void;
  updateUserToken(token: string): void;
};

const UserContext = createContext<UserContextProps>({} as UserContextProps);

const UserProvider = ({children}: {children: React.ReactNode}) => {
  const [user, setUser] = useState<UserProps | null>(null);

  function getUserToken() {
    if (user) {
      return user.token;
    }
  }

  function updateUserToken(token: string) {
    setUser({token});
  }

  return (
    <UserContext.Provider value={{user, updateUserToken, getUserToken}}>
      {children}
    </UserContext.Provider>
  );
};

function useUser() {
  const context = useContext(UserContext);
  return context;
}

export {UserProvider, useUser, UserContext};
