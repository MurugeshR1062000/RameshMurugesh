import React from 'react';

function Login() {	
  return (
	<div class="main-wrapper account-wrapper">
   <div class="account-page">
      <div class="account-center">
         <div class="account-box">
            <form action="#" class="form-signin">
               <div class="account-logo">
                  <a href="index.html"><img src="assets/images/logo_new.png" alt=""/></a>
                  <h4>Login</h4>
                  <p>Access to our dashboard</p>
               </div>
            
               <div class="form-group">
                  <label>Username or Email</label>
                  <input type="text" autofocus="" class="form-control"/>
               </div>
               <div class="form-group">
                  <label>Password</label>
                  <input type="password" class="form-control" />
               </div>
               <div class="form-group text-right">
                  <a href="forgot-password.html">Forgot your password?</a>
               </div>
               <div class="form-group text-center">
                  <button type="submit" class="btn btn-primary account-btn">Login</button>
               </div>
               <div class="text-center register-link">
                  Don’t have an account? <a href="#">Register Now</a>
               </div>
            </form>
         </div>
      </div>
   </div>
</div>

  );
}
export default Login;
