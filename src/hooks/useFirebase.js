import {useEffect, useState} from "react";
import {getAuth, createUserWithEmailAndPassword,signInWithPopup, signInWithEmailAndPassword ,GoogleAuthProvider ,updateProfile , onAuthStateChanged, getIdToken, signOut} from "firebase/auth";
import initializeFirebase from "../Firebase/firebase.initialize";
//initialize firebase app
initializeFirebase();
const useFirebase=() => {
  const [user, setUser]=useState({});
  const [isLoading, setIsLoading]=useState(true);
  const [authError, setAuthError]=useState('');
  const [admin, setAdmin]=useState(false);
    const auth=getAuth();
  const googleProvider=new GoogleAuthProvider();

    //register user
  const registerUser=(email, password, history, name) => {
      setIsLoading(true)
      console.log('From register user', email);
        createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
           setAuthError('');
           const newUser={email, displayName: name}
           //send name to firebase after creation
           setUser(newUser);
           //save user to the database
          saveUser(email, name, 'POST')
              updateProfile(auth.currentUser, {
                  displayName: name
              }).then(() => {

              }).catch((error) => {

              });
           history('/',{replace: true});
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage=error.message;
    setAuthError(errorMessage)
    // ..
  })
          .finally(()=>  setIsLoading(false));
    }
    //sign in
  const loginUser=(email, password, location, history) => {
    setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
    //location set
            const destination=location.state?.from ||'/';
            history(destination ,{replace: true});
    // Signed in
    setAuthError('');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage=error.message;
    setAuthError(errorMessage)
  }).finally(()=>  setIsLoading(false));
  }

  //google sign in
  const signInWithGoogle=(location, history) => {
    setIsLoading(true);
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    const user=result.user;
    saveUser(user.email, user.displayName, 'PUT')
    setAuthError('');
    const destination=location.state?.from||'/';
            history(destination ,{replace: true});

  }).catch((error) => {
    setAuthError(error.message)
  }).finally(()=>  setIsLoading(false));

}
//observer
    useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {

    setUser(user);
    getIdToken(user)
    .then(idToken => {

    })
  } else {
    setUser({})
    }
    setIsLoading(false);
  });
        return () => unsubscribe;
    }, [auth]);

  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => {
      setAdmin(data.admin)
    })
  },[user.email])
    //log out
    const logout= () => {
    signOut(auth).then(() => {
  // Sign-out successful.
    }).catch((error) => {
  setAuthError(error.message)
  // An error happened.
}).finally(()=>  setIsLoading(false));;
  }

  //save user function
    const saveUser=(email, displayName, method) => {
        const role='user';
        const user = { email, displayName, role };
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    return {
      user,
      admin,
      isLoading,
      signInWithGoogle,
        registerUser,
      loginUser,
        authError,
        logout
    }

};

export default useFirebase;