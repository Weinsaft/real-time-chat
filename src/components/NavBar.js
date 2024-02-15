import React, { useState } from "react";
import GoogleSignin from "../assets/images/google-icon.png";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);
  
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar flex justify-between items-center p-2 bg-blue-300">
      <h1 className="text-2xl">React Chat</h1>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
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
    </nav>
  );
};
export default NavBar;
