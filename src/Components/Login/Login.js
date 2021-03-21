import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { userContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './Login.css'


const Login = () => {
    const [newUser, setNewUser] = useState(false)
    const [loggedInUser,setLoggedInuser]= useContext(userContext)
    const history = useHistory();
    const location = useLocation();
    const {from} = location.state || {from : {pathname: "/"}};
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
     }else {
        firebase.app();
     }
     const faceBookProvider = new firebase.auth.FacebookAuthProvider();
     const googleProvider = new firebase.auth.GoogleAuthProvider();
     const signInWithGoogleHandler = () =>{
        firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const {displayName, email, phototURL} = res.user
            const signedInUser = {isLoggedIn: true, name: displayName, email: email, photo : phototURL}
            setLoggedInuser(signedInUser)
            history.replace(from)
        })
        .catch(err => {
            // console.log(err.message)
        })
     }

     const signInWithFaceBook = () =>{
        firebase.auth().signInWithPopup(faceBookProvider)
        .then(res =>{
            const {displayName, email, phototURL} = res.user
            const signedInUser = {isLoggedIn: true, name: displayName, email: email, photo : phototURL}
            setLoggedInuser(signedInUser)
            history.replace(from)
        })
        .catch(err => {
            console.log(err.message);
        })
     }

     const signOut = () =>{
        firebase.auth().signOut()
        .then(res => {
          const logOutUser = {
            isLogedIn: false,
            email: "",
            name: '',
            emailStutus: '',
            photo: '',
            error: '',
            success: ''
          }
          setLoggedInuser(logOutUser)
        })
        .catch((error) => {
          console.log(error.message);
        });
     }

     const inputFeild = (e) =>{
         let isTheFeildValid ;
         if (e.target.name === "email") { 
            isTheFeildValid = /\S+@\S+\.\S+/.test(e.target.value)  // validation with reg
         }
         if (e.target.name === "name") { 
            isTheFeildValid = e.target.value
         }
         if (e.target.name === "password") {
            const isPassWordMoreThenSix = e.target.value.length > 6;
            const isPassWordValid = (/[a-zA-Z]/).test(e.target.value) // validation with reg
            isTheFeildValid = isPassWordMoreThenSix && isPassWordValid
         }
         if (e.target.name === "password2") {
            const isPassWordMoreThenSix = e.target.value.length > 6;
            const isPassWordValid = (/[a-zA-Z]/).test(e.target.value) // validation with reg
            isTheFeildValid = isPassWordMoreThenSix && isPassWordValid
         }
         // update to state
         if (isTheFeildValid) {
             const  newLoggedInUserInfo = {...loggedInUser }
             newLoggedInUserInfo[e.target.name] = e.target.value;
             setLoggedInuser(newLoggedInUserInfo)
         }
     }

     const handleSignInWithPassword = (e) =>{
        if ( newUser && loggedInUser.email && loggedInUser.password) {
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
            .then(res => {
                const signedInUser = {...loggedInUser}
                signedInUser.error = ''
                updateUserName(loggedInUser.name)
                signedInUser.success = true;
                signedInUser.submitTure = true;
                setLoggedInuser(signedInUser)
            })
            .catch((error) => {
                const signedInUser = { ...loggedInUser }
                signedInUser.error = error.message
                signedInUser.success = false;
                setLoggedInuser(signedInUser)
            });
        }
        if (!newUser && loggedInUser.email && loggedInUser.password) {
            firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
            .then(res => {
            // const signedInUser = {...loggedInUser}
            const newLoggedInUserInfo = {...loggedInUser }
            newLoggedInUserInfo.error = ''
            newLoggedInUserInfo.success = true;
            history.replace(from)
             setLoggedInuser(newLoggedInUserInfo)
            })
            .catch((error) => {
            const signedInUser = { ...loggedInUser }
            signedInUser.error = error.message
            signedInUser.success = false;
            setLoggedInuser(signedInUser)
            });
        }
        e.preventDefault();
     }
     const updateUserName = (name) => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
          displayName: name
        })
          .then(function () {
           
          })
          .catch(function (error) {
           
          });
      }
      console.log(loggedInUser);
    return (
        <div className="container">
            {
                !loggedInUser.isLoggedIn && loggedInUser.submitTure && <p className="mt-5 text-danger">You Should Log in or Signup first</p>
            }
            {
                newUser && loggedInUser.email && loggedInUser.submitTure && <p style={{color:'green'}}> Hello, <span className="text-danger">{loggedInUser.name}</span> ,<span className="badge">Thanks For Signed Up to our web app, Now you aer permited to visit our Proteced page "Destination, and other"</span> </p>
            }
            <p className="mt-2 mb-5 text-danger"> {loggedInUser.error}</p>
            {
                loggedInUser.success && loggedInUser.email &&  <p style={{color:'green'}}> Your {newUser && loggedInUser.email ? "account created" : "logged in"} successfully!</p>
            }
            {
               loggedInUser.isLoggedIn && <div>
                    <p>Hello, <h4>{loggedInUser.name} , Thanks For Using Our App</h4></p>
               </div>
           }
            <form className="w-100 mt-4">
                {
                    newUser && <div className="mb-3">
                    <label for="exampleInputEmail2" className="form-label">Name</label>
                    <input type="Name" name="name" onBlur={inputFeild} className="form-control" id="exampleInputEmail2" placeholder="Enter Your Name Here" aria-describedby="emailHelp"/>
                </div>
                }
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name="email" onBlur={inputFeild} className="form-control" id="exampleInputEmail1"  placeholder="Enter Your Valid Email Here" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name="password" onBlur={inputFeild} placeholder="Enter Password" className="form-control" id="exampleInputPassword1"/>
                </div>
                {
                    newUser && <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" name="password2" onBlur={inputFeild} placeholder="Re-Enter New Password" className="form-control" id="exampleInputPassword1"/>
                </div>
                }
                    <button className="w-100 btn btn-primary" type="submit" onClick={handleSignInWithPassword}>
                        {
                            newUser ? "Sign Up" : "Log in"
                        }
                    </button>
                
                <div>
                {
                    !newUser && <span>Already have an account? <span onClick={()=>setNewUser(!newUser)} className="text-success createanAC"> Create an Account </span> </span>
                }
                </div>
            </form>
                
            {
                loggedInUser.isLoggedIn ? <button className="w-100 mt-2 btn btn-primary mt-1"  onClick={signOut}>Log Out</button> :  <div>
                <div><button onClick={signInWithGoogleHandler} className="mt-2 btn btn-primary w-100">signin with google</button></div>
                <button onClick={signInWithFaceBook} className="w-100 mt-2 btn btn-primary">signin with Facebook</button>
                </div> 
             }
        </div>
    );
};

export default Login;


