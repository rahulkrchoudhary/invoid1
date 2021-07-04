import React,{useState,useEffect,Suspense} from"react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Verification from'./Verification'
import fire from './fire';
import Login from './Login';
import Hero from './Hero';
import './App.css';





const App =()=>{
const[user,setUser]=useState('');
const[email,setEmail]=useState('');
const[password,setPassword]=useState('');
const[emailError,setEmailError]=useState('');
const[passwordError,setPasswordError]=useState('');
const[hasAccount,setHasAccount]=useState(false);


const clearInputs =()=>{
  setEmailError('');
  setPassword('');
}
const clearErrors =()=>{
  setEmailError('');
  setPasswordError('');
}

const handleLogin=()=>{
clearErrors();

  fire
    .auth()
    .signInWithEmailAndPassword(email,password)
    .catch(err =>{
      switch(err.code){
        case "auth/invalid-email":
          case "auth/user-disabled":
            case "auth/user-not-found":
            setEmailError(err.messafe);
            break;
            case "auth/wrong-password":
              setPasswordError(err.message);
              break;

      }
    });

};
const handleSignup =() =>{
  clearErrors ();
  fire
  .auth()
  .createUserWithEmailAndPassword(email,password)
  .catch(err =>{
    switch(err.code){
      case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.messafe);
          break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;

    }
  });
};
const handleLogout =()=>{
  fire.auth().signOut();
};

const authListener =()=>{
  fire.auth().onAuthStateChanged((user)=>{
    if (user){
      clearInputs();
      setUser(user);
    }
    else{
      setUser("");
    }
  });
};
useEffect(()=>{
  authListener();
},[]);


  return (
    <div className="App">
      {user ? (
       <Router>
       
       <Suspense fallback={<div>Loading...</div>}>
         <Switch>
           <Route exact path="/" component={()=><Hero handleLogout={handleLogout} />} />
           <Route path="/Verification" component={Verification} />
         </Switch>
       </Suspense>
     </Router>
      ):( <Login 
        email={email}
         setEmail={setEmail}
          password={password} 
          setPassword={setPassword}
          handleLogin={handleLogin}
          handleSignup={handleSignup}
          hasAccount={hasAccount}
          setHasAccount ={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
             />

      )}

    
         
    </div>
  );
}

export default App;
