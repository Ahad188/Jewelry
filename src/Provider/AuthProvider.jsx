import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile  } from "firebase/auth";
import { app } from "../Components/Firebase/firebase.config";
 
 
 
export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
    
      
     const createUser = (email, password) => {
          setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password);
        };
        const singIn = (email,password)=>{
          setLoading(true)
          return signInWithEmailAndPassword(auth,email,password)
     }
     const googleSing=()=>{
          return signInWithPopup(auth, googleProvider)
     }
     const logOut =()=>{
          setLoading(true)
          return signOut(auth)
     }
     const updateUserProfile = (name, photo) => {
          return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
          });
        };
     useEffect(()=>{
          const unsubscribe = onAuthStateChanged(auth, loggedUser => {
          //     console.log('logged in user inside auth state observer', loggedUser)
              setUser(loggedUser);
               setLoading(true)
          })
  
          return () => {
              unsubscribe();
          }
      }, [])
         

      const authInfo ={
          user,
          loading,
          createUser,
          singIn,
          googleSing,
          logOut,
          updateUserProfile,
          
     }
    
     
    
  

    
     
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;