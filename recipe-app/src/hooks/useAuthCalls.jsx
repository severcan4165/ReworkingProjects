import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../store/slices/authSlice";
import {
  toastErrorNotify,
  toastSuccessNotify,
} from "../helpers/toastify";
import {auth} from "../firebase/firebase"

const useAuthCalls = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ! ############## Sign Up With Email and Password ###################

  const signUp = async (email, password, navigate) => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        // ...
        toastSuccessNotify("Succesfully Registered");
        navigate("/login");
      })
      .catch((error) => {

        const errorMessage = error.message;
        toastErrorNotify(errorMessage);

        // ..
      });
  };

// ! ############## Sign In with email and password  ###################
const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user)
      toastSuccessNotify("Succesfully Logged in")
      navigate("/")
      // ...
    })
    .catch((error) => {

      const errorMessage = error.message;
      toastErrorNotify(errorMessage)
    });
  }
  // ! ############## User Info Tracker ---onAuthStateChanged---  ###################
  const userObserver = () => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
         // User is signed in
        // const uid = user.uid;
        const { email } = user;

        dispatch(setUser(email))
  
      } else {
        // User is signed out
        dispatch(setUser(false))
      }
    }
    )
  }
  // ! ############## Sign Out ###################

const localSignOut = async () => {  

    await signOut(auth)
     toastSuccessNotify("Logged out successfully!")
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
        toastSuccessNotify("Succesfully Logged in")
        navigate("/")
      }).catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        toastErrorNotify(error)
        // ...
      });


  } 
  return {signUp, signIn, userObserver, localSignOut, handleGoogleSignIn };
}

export default useAuthCalls;