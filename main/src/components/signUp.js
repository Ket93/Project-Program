import React from 'react';
import loginSidePic from '.././images/loginSidePic.jpeg';
import './signUp.css';

function SignUp() {

    return (
        <body>
            <div class='spiltScreen' >
                <div class='imgDiv'> 
                    <img src={loginSidePic} class='loginSideIMG' />
                </div>


                <div class='inputDiv' >
                    <div class='emptyDiv' ></div>



                    <div class='signUpTitle' >
                        <p>Sign Up</p>
                    </div>



                    <div class='emptyDiv'></div>



                    <div>
                        <label class='emailText'> Email </label>
                    </div>
                    <div>
                        <input type="text" placeholder='email' class='emailInput' />
                    </div>


                    
                    <div>
                        <label class='passwordText'> Password </label>
                    </div>
                    <div> 
                       <input type="text" placeholder='password' class='passwordInput' />
                    </div>

                    <div>
                        <label class='confirmPasswordText'> Confirm Password </label>
                    </div>
                    <div> 
                       <input type="text" placeholder='password' class='passwordInput' />
                    </div>


                
                    <button type = "button" class='loginButton'> Login </button>

                    <div class='bottomText'>
                        <p class='haveAccText'>Have an account already?</p>
                        <a class='loginLink' href='/sign-in'>Login</a>
                    </div>
                </div>
            </div>
            
        </body>
    )
}

export default SignUp;