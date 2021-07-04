import React from 'react';
import something1 from'./invoidlogo.png';
const Login =( props) =>{


    const{email,setEmail,password,setPassword,handleLogin,handleSignup,hasAccount,setHasAccount,emailError,passwordError }=props;
    
    return(
        <section className="login">

            <div className="loginContainer">
            <div> <center><img  src={something1} alt="fireSpot"/> </center> </div>
                
                <label>Username

                </label>
                <input
                type="text"
                autoFocus
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <p className="errorMsg">{emailError} </p>

                 <label>password

                </label>
                <input
                type="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <p className="errorMsg">{passwordError} </p>
                <div className="btnContainer">
                    {hasAccount ?(
                        <>
                        <button  onClick={handleLogin}>Sign in</button>
                        <p> Dont't hsve An Account? <span onClick={()=> setHasAccount(!hasAccount)}> Sign up</span>

                        </p>
                        </>
                    ):(
                        <>
                        <button onClick={handleSignup}>Sign up</button>
                        <p>
                            Have an account? <span onClick={()=> setHasAccount(!hasAccount)}>Sign in</span>

                        </p>
                        </>


                    )}
                </div>

            </div>

        </section>
    );
};
export default Login;