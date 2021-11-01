import React,{ Fragment, useState }  from 'react';
import principio from "./Componentes/LOGIN/principio"
import NavBar from "./Componentes/Navigation/NavBar";

import Log from './Componentes/LOGIN/Log';
 
function App () {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   
   const storedLoggedInfo = localStorage.getItem("isLoggedIn");
   if (storedLoggedInfo === 1){
      setIsLoggedIn(true);
   }

   const loginHandler = () => {
      console.log("Loging in...")
      localStorage.SetItem("isLoggedIn", 1);
      setIsLoggedIn(true);
   };
   const logoutHandler = () => {
      console.log("logout..");
      console.log(isLoggedIn);
      localStorage.removeItem("isLoggedIn");
      setIsLoggedIn(false);
   }
   return (
      <div className="content"> 
         <NavBar onLogout={logoutHandler}/>{
         isLoggedIn ? ( 
            <Fragment>
                 <principio/>
           </Fragment>
           ): ( 
            <Log onLogin={loginHandler}/>
         ) } 
      </div>
   );
};
export default App;

