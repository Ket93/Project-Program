import React from 'react'
import './home.css';
import pic from "../../images/Finance_app-bro.png";

const Home = () => {
    return (
        <div>

            <h1 class="title">Welcome to Investable</h1>

            <img src={pic} class="titlePic" />

        </div>
    )
}

export default Home
