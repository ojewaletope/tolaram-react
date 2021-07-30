import React from 'react'
import './Auth.scss'
import Input from "../../components/Input";
import Button from "../../components/Button";
const Auth = () => {
    return (
        <div className='page-wrapper'>
            <div className="page-section">
                <div className="left-section">
                    <div className="left-wrapper">
                        <h4 className="page-header"><b>Asgard</b></h4>
                        <p className="para-text">A cloud based community for you to connect with fellow Asgardians</p>
                    </div>
                </div>
                <img className="svg-img" src="../assets/img/celebrating.svg" alt="svg"/>
                    <div className="right-section">
                        <div className="form-container">
                            <h3>Sign Up to Asguard</h3>
                            <p className="para-text">Already have an account? <span className="link">Login</span></p>
                            <div className="btn-container">
                                <a className="google-btn"> <img src="../assets/img/google.png" alt="Google"
                                                                className="icon"/>Sign up with Google</a>
                                <div className="brand-btn"><img src="../assets/img/facebook.png" alt="Facebook"
                                                                className="icon"/></div>
                                <div className="brand-btn"><img src="../assets/img/apple.png" alt="Apple"
                                                                className="icon"/></div>
                            </div>
                            <div className="or-link">or</div>
                            <form action="" className="form">
                                <Input type="text" placeholder="Name" name="name" id="name" label="Name"/>
                                <Input type="email" placeholder="Email" name="email" id="email" label="Email"/>
                                <Input type="password" placeholder="Password" name="password" id="password" label="Password"/>
                                <div className="password-meter">
                                    <label htmlFor="passwordStrength">Password Strength</label>
                                    <div className="meter-wrapper">
                                        <meter value="100"/>
                                        <meter value="100"/>
                                        <meter value="100"/>
                                    </div>
                                </div>
                                <div className="checkbox-wrapper">
                                    <input type="checkbox"/>
                                    <span className="checkbox-text">By creating account you agree to accept our
              <span className="link">Privacy policy</span><span className="link"> Terms and condition</span> and
              <span className="link"> Notification Settings</span></span
                                    >
                                </div>
                                <Button/>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Auth
