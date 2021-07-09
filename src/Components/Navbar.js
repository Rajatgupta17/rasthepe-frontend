import React , {Component}  from 'react';
import frame from "../Assets/Frame.png";
import brand from "../Assets/image 2.png";
import "../Styles/Navbar.css";
class Navbar extends Component{
    render(){
        return(
            <div className="nav-main">
                <div className="nav-left">
                <img src={frame} className="pointer"></img>
                <img src={brand} className="brand"></img>
                </div>
                <div className="nav-right">
                    <button className="btn-login">Login</button>
                    <p className="text-or">or</p>
                    <button className="btn-register">Register</button>
                </div>
            </div>
        )
    }
}
export default Navbar;