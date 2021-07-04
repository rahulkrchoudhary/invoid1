import React from 'react';
import {Link} from 'react-router-dom'
import something from'./img2.gif';
import something1 from'./invoidlogo.png';

const Hero =({handleLogout} )=>{

    return(
        <section className="hero">
           <nav> 
               <h2>Invoid</h2>
               <h2>
               <Link  to="/Verification">Verification</Link></h2>
               
               <button onClick={handleLogout}>Logout</button>
                </nav> 

               
                    <div class ="column">
                <div><img  src={something} alt="fireSpot"/></div>
                </div>
                <br></br><br></br><br></br><br></br><br></br>
                <div className="SomeContainer">
               <div>
               <div><img  src={something1} alt="fireSpot"/></div>
<br></br>
                    <h4> In today’s age, with numerous cyber frauds and identity thefts, efficient and dependable customer  verification before onboarding has become a prerequisite for many businesses. Many businesses  like matrimonial, car rental, insurance, trading need identity verification. 
                        However, the manual verification of thousands of customers can become a tedious and  cumbersome task for both businesses and customers. Even the digital methods present are slow  and inefficient. Also, identity verification is not user-friendly and degrades the u</h4>
                </div>
                <br></br>

                </div>


              
                
        </section>
         
         
         
         
    );
};
export default Hero;

