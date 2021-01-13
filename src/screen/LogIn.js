import React from 'react';
import { NavLink } from 'react-router-dom';

const LogIn = () => {
 return (
  <>
   <div className="LogIn d-flex align-items-center">
    <div className="w-100">
     <h3 className="text-center mb-3">Log In</h3>
     <form>
      <input
       className="form-control text-center my-2"
       type="text"
       placeholder="Email..."
       name="email"
      />
      <input
       className="form-control text-center mt-2"
       type="text"
       placeholder="Password..."
       name="pwd"
      />
      <NavLink to="/signup">
       <small className="w-100 text-center">Don't have an account yet?</small>
      </NavLink>
      <input
       className="btn btn-dark d-block mx-auto mt-4"
       type="submit"
       value="LOG IN"
      />
     </form>
    </div>
   </div>
  </>
 );
};

export default LogIn;
