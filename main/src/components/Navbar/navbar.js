import React, { Component } from "react";
import { Nav, NavLink, NavMenu, NavBtn, Bars, NavBtnLink } from "./navbarelements.js";

const MyNavbar = () => {

    return (

        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/">Home</NavLink>

                    <NavLink to="/calc" activestyle >Financial Calculator</NavLink>

                    <NavLink to="/mutual-funds" activestyle>Mutual Funds</NavLink>

                    <NavLink to="/credit-balance" activestyle>Credit Balance</NavLink>

                </NavMenu>

                <NavBtn>
                    <NavBtnLink to="/sign-in">Log In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    );
};

export default MyNavbar;