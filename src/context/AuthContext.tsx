import * as React from 'react';
import {
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  deleteUser,
  onAuthStateChanged
} from 'firebase/auth';
import { auth } from '../firebase';

interface PropChildren {
  children: React.ReactNode;
}

interface AuthValues {
  currentUser: User | null;
  signUp: (
    email: string,
    password: string
  ) => Promise<UserCredential>;
  signIn: (
    email: string,
    password: string
  ) => Promise<UserCredential>;
  logOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  deleteCurrentUser: () => Promise<void>;
}

const AuthContext = React.createContext({} as AuthValues);

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export const AuthProvider = ({ children }: PropChildren) => {
  const [currentUser, setCurrentUser] = React.useState<User | null>();

  const signUp = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

  const logOut = () => signOut(auth);

  const resetPassword = (email: string) =>
    sendPasswordResetEmail(auth, email);

  const deleteCurrentUser = () => deleteUser(currentUser);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>
      setCurrentUser(user)
    );

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUp,
    signIn,
    logOut,
    resetPassword,
    deleteCurrentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
