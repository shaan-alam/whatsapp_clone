import { createContext, useState, useEffect } from "react";
import { auth } from "../firebase/config";
import firebase from "firebase";

export const Context = createContext({});

export default function GlobalContext({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const value = {
    user,
    loginWithGoogle,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}
