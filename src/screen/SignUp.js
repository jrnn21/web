import React from 'react';

const SignUp = () => {
 return (
  <>
   <div className="LogIn d-flex align-items-center">
    <div className="w-100">
     <h3 className="text-center mb-3">Register</h3>
     <form>
      <input
       className="form-control text-center my-2"
       type="text"
       placeholder="Username..."
       name="username"
      />
      <input
       className="form-control text-center my-2"
       type="text"
       placeholder="Email..."
       name="email"
      />
      <input
       className="form-control text-center my-2"
       type="password"
       placeholder="Password..."
       name="pwd"
      />
      <input
       className="form-control text-center my-2"
       type="password"
       placeholder="Verify Password..."
       name="pwdRepeat"
      />
      <input
       className="btn btn-dark d-block mx-auto mt-4"
       type="submit"
       value="SIGN UP"
      />
     </form>
    </div>
   </div>
  </>
 );
};

export default SignUp;
