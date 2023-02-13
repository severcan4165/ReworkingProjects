import { auth } from "../firebase/firebase";
import {useNavigate} from "react-router-dom"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/authSlice";

export const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ! ############## Sign Up With Email and Password ###################
  const SignUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        navigate("/login");
        return user;
      })
      .catch((error) => {

        const errorMessage = error.message;
        alert(errorMessage)
      });
  }

  // ! ############## Sign In with email and password  ###################

  const SignIn = (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/")
        return user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage)
      });
  }

  // ! ############## User Info Tracker  ###################
  const UserObserver = () => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        dispatch(setUser(true))
        return uid
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(setUser(false))

      }
    });
  }
    // ! ############## Sign Out ###################

const localSignOut = async () => {  

  await signOut(auth)
   navigate("/login")
 }

    // ! ############## Sign in With Google ---PopUp----  ###################
    const handleGoogleSignIn =async () => {
      const provider = new GoogleAuthProvider();
  
      await signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log(user)
          // IdP data available using getAdditionalUserInfo(result)
          // ...
    
          navigate("/")
        }).catch((error) => {
          // Handle Errors here.
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // The email of the user's account used.
          // const email = error.customData.email;
          // The AuthCredential type that was used.
          // const credential = GoogleAuthProvider.credentialFromError(error);
          console.log(error)
          // ...
        });
  
  
    } 
  return { SignUp, SignIn, UserObserver, handleGoogleSignIn, localSignOut }
};


