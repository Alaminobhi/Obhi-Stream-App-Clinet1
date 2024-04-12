import { redirect } from "react-router-dom";
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import config from "../../firebase.init";







function Login() {

    const signInWithGoogle = () => {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(config);
      signInWithPopup(auth, provider)
      .then(res => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
    // const credential = GoogleAuthProvider.credentialFromResult(res);
    // const token = credential.accessToken;
    //   console.log(token);
    // The signed-in user info.
  const userId = res.user;
  localStorage.setItem("userId", JSON.stringify(userId));
        if (!userId) {
          return redirect("/login");
        }
        return redirect("/home");
      })
      .catch((error) => {
        // Handle Errors here.
       
        const errorMessage = error.message;
        console.log(errorMessage);
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // // ...
      });
       
      };
    const userSignOut = () => {
      const auth = getAuth(config);

      signOut(auth)
        .then(res => {
          console.log(res);
          // setUser(res.user);
            
          //   if (!user) {
          //     return redirect("/login");
          //   }
          //   return redirect("/home");
        })
      }
     
    return ( 
        <div className="text-center border">
    <button onClick={signInWithGoogle}> signIn With Google</button> <br/>
    <button onClick={userSignOut}>user SignOut</button>
   
        
       </div>
     );
}

export default Login;