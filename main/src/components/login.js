import React from 'react';
import loginSidePic from '.././images/loginSidePic.jpeg';
import './login.css';

function login() {

    return (
        <body>
            <div class='spiltScreen' >
                <div class='imgDiv'> 
                    <img src={loginSidePic} class='loginSideIMG' />
                </div>


                <div class='inputDiv' >
                    <div class='emptyDiv' ></div>


                    
                    <div class='loginTitle' >
                        <p>Login</p>
                    </div>



                    <div class='emptyDiv'></div>




                    <div>
                        <label for= 'email' class='emailText'> Email </label>
                    </div>
                    <div>
                        <input type="text" placeholder='email' class='emailInput' id='email' />
                    </div>
                    
                    <div>
                        <label for='password' class='passwordText'> Password </label>
                    </div>
                    <div> 
                       <input type="text" placeholder='password' class='passwordInput' id='password' />
                    </div>
                
                    <button type = "button" class='loginButton'> Login </button>

                    <div class='bottomText'>
                        <p class='noAccText'>Don’t have an account?</p>
                        <a class='signUpLink' href='/signUp'>Sign up</a>
                    </div>
                </div>
            </div>
            
        </body>
    )
}

export default login;