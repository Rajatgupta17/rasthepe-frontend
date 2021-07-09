import React, {Component} from "react";
import home from "../Assets/home.svg";
import  CardOne from "../Assets/grp-first.svg";
import CardTwo from "../Assets/grp-sec.svg";
import CardThree from "../Assets/grp-third.svg";
import LocationSearchInput from "./Main";
import "../Styles/HomePage.css"
import Pointer from "../Assets/pointer.svg";
class HomePage extends Component{
    render(){
        return(
            <div className="homepage-main">
                <div className="homepage-left">
                    <h1 className="homepage-text-heading">Text Heading</h1>
                    <p className="homepage-text">Lorem ipsum dolor sit amet, consectetur dipiscing elit, sedo eiusmod tempor.</p>
                    <img src={home} className="homepage-img"></img>
                </div>

                <div className="homepage-right">
                    <div className="homepage-card">
                        <h3 className="card-heading">What are you sending?</h3>
                        <div className="card-images">
                            <div className="card-image-item">
                            <img src={CardOne} ></img>
                            <p className="item-text">Documents<sup><i class="far fa-info-circle"></i></sup></p>
                            </div>
                            <div className="card-image">
                            <img src={CardTwo} ></img>
                            <p className="item-text">Parcel<sup><i class="fas fa-info-circle"></i></sup></p>
                            </div>
                            <div className="card-image">
                            <img src={CardThree} ></img>
                            <p className="item-text">Heavy Load<sup><i class="fas fa-info-circle"></i></sup></p>
                            </div>
                        </div>
                        <div className="input-locations">
                            <div className="pointer">
                                <img src={Pointer}></img>
                            </div>
                            <div className="inputs">
                            <LocationSearchInput className="pickLoc" placeholder="Enter Pickup Location"/>
                            <LocationSearchInput className="dropLoc" placeholder="Enter Recipient Location"/>
                        </div>
                        </div>
                        <button className="order">Order</button>
                    </div>
                    <div className="homepage-card-two">
                        <p>Track your Package</p>
                        <div className="track-input">
                        <input placeholder="Enter Track ID/Code"></input>
                        <i class="fas fa-search"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;