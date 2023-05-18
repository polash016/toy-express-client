import { createContext } from "react";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const googleLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  const emailLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const authInfo = {
    googleLogin,
    emailLogin
  };

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
        </AuthContext.Provider>
  );
};

export default AuthProvider;
