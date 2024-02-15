import React from "react";
import GoogleSignin from "../assets/images/google-icon.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const Welcome = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
 

  return (
    <div className="flex justify-center items-center py-5 flex-col gap-5">
      <h2 className="text-3xl">Welcome To React Real Time Chat</h2>
      <div className="flex justify-center items-center flex-col gap-2">
        <h3>Sign in to Google to Start</h3>
        {!user && (
          <button className="sign-in flex items-center gap-1 border border-black p-1">
            Sign In With
            <img
              onClick={googleSignIn}
              src={GoogleSignin}
              alt="sign in with google"
              type="button"
              width={30}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Welcome;
