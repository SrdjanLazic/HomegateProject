import React from 'react';
import './Home.css'
import RedeemIcon from '@mui/icons-material/Redeem';
import { useNavigate } from "react-router-dom";
import KeyIllustration from './lock-illustration.png'


function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <div className={"top"}>
                <div className={"layout-container"}>
                    <div className={"search-box"}>
                        <h1>Switzerland's smartest property search</h1>
                        <div className={"type-radio"}>
                            <div className={"rentRadio"}>
                                <input type="radio" id="rent" name="rentbuy" value="For rent" checked/>
                                <label>For rent</label>
                            </div>
                            <div className={"buyRadio"}>
                                <input type="radio" id="buy" name="rentbuy" value="To buy"/>
                                <label>To buy</label>
                            </div>
                        </div>
                        <div className={"search-parameters-input"}>
                            <input className={"search-input"} id={"location-input"} type={"text"}
                                   placeholder={"Cities, regions, ZIP, country"}/>
                            <select className={"search-input"} id={"distance-dropdown"}>
                                <option>+ 0km</option>
                            </select>
                            <select className={"search-input"} id={"property-type-dropdown"}>
                                <option>Aparment & house</option>
                            </select>
                            <select className={"search-input"} id={"price-dropdown"}>
                                <option>Price</option>
                            </select>
                            <select className={"search-input"} id={"rooms-dropdown"}>
                                <option>Rooms</option>
                            </select>
                            <button onClick={() => navigate('/search')} className={"search-button"}>
                                <strong>Search</strong>
                            </button>

                        </div>
                        <div className={"redeem"}>
                            <RedeemIcon/>
                            <a id={"redeem-text"} href={"#"}>List your property from CHF 0.-</a>
                        </div>
                    </div>
                    <div className={"banner"}>
                        <img className={"banner-image"} src={KeyIllustration}/>
                        <div className={"banner-text"}>
                            <h2 className={"banner-title"}>Find a new tenant for free</h2>
                            <p className={"banner-subtitle"}>Create a free listing on Homegate to find the perfect next tenant for your apartment in
                                no time at all.</p>
                            <button className={"list-property-button"}><strong>List your property now</strong></button>
                        </div>
                    </div>
                </div>
                <img src={"https://media.homegate.ch/image/upload/t_homepage_banner_2048x1056/assets/hero/homepage.jpg"}/>

            </div>


        </div>

    );
}

export default Home;