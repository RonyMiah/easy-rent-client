import {
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
} from "firebase/auth";
import { useEffect, useState } from "react";
import authInitialize from "../firebase/firebase.init";

authInitialize();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  // sign in with google

  const signInWithGoogle = (location, navigate) => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state?.from || "/");
      })
      .catch((error) => {
        setError(error.massage);
      })
      .finally(() => setIsLoading(false));
  };

  const registerUser = (email, password, name) => {
    setIsLoading(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const newUser = { email, displayName: name };
        setUser(newUser);

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            setError(error.massage);
          });
      })
      .catch((error) => {
        setError(error.massage);
      })
      .finally(() => setIsLoading(false));
  };

  const logInUser = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.massage);
      })
      .finally(() => setIsLoading(false));
  };

  // setAdmin

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        setError(error.massage);
      })
      .finally(() => setIsLoading(false));
  };

  // to check user state

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  return {
    signInWithGoogle,
    user,
    admin,
    isLoading,
    registerUser,
    logInUser,
    logOut,
    error,
  };
};

export default useFirebase;
