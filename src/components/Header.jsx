import React from "react";
import './CSS/Header.css';
import masla_logo from '../Assests/masla_logo.png';


class HomeLoginButton extends React.Component {
    handleClick = () => {
      // Logic for handling login button click
      // For simplicity, let's just log a message to the console
      console.log('Login button clicked');
    };
  
    render() {
      return (
        <>
        <div>
            <h3 onClick={this.handleClick} className="login-button" >
            Login
            </h3>
        </div>
            
      </>
        
      );
    }
  }
  
  export default HomeLoginButton;
  


export const Header = () => {
    return (
        <>
        <div className="top-bar">
            <div className="logo" >
                <img src={masla_logo} alt="mas logo" height='150px'width='150px' ></img>
            </div>
            <div id="title">
                <h1>MAINTENANCE DEPARTMENT</h1>
            </div>
            <div id="homeLoginButton">
                <HomeLoginButton />
            </div>
            
        </div>
        </>
    )
}