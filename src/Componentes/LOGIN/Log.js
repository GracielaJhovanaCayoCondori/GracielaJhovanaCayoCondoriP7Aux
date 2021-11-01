import React, { useReducer } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';


const initialState ={
   email: "",
   password: "",
};   
function reducer(state, action){
   return {...state, [action.input]: action.value };
};  
const Log = (props) => {
   const [state, dispatch] = useReducer(reducer, initialState);

   const emailChangeHandler = (e) =>{
     const action ={
        input: e.target.name,
        value: e.target.value,
     };
     dispatch(action);
   
   };

   const passwordChangeHandler = (e) =>{
    const action ={
      input: e.target.name,
      value: e.target.value,
   };
   dispatch(action);

   };
   
   const handlerSubmit =(e) => {
      
      e.preventDefault();
      if (
        /^[a-zA-Z0-9_.+-]+@(gmail|yahoo|hotmail)+\.[com]+$/.test(state.email) &&
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(state.password)
      ) {
        alert(`sus datos son correctos ${state.email}`);
      } else {
        alert("datos incorrectos");
     
      }
    


   };



   return (
       <Card>
       
          <form onSubmit={handlerSubmit}>
              <h2>login</h2>
              <label>Email</label> 
              <input type="email" onChange={emailChangeHandler} name="email"  placeholder="usuario@ejemplo.com"/><br/>
              <label>Password</label>
              <input type="password" onChange={passwordChangeHandler} name="password" />
              <div id="passwordHelp" class="form-text" >incluya por lo menos un numero</div> 
              <Button type="submit" >Login</Button>
          </form>    
         
      </Card>
   )   
};
export default Log;
