import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import './Navbar.css';
import logo from "../../Asset/img/Kwik.png"

function Navbar() {
    return (
        <>
        <nav>
            <NavMenu>
                <NavLink to="/" activeStyle>
                    <img src={logo} alt="KwikMart" height={60} width={60}/>
                </NavLink>
                <NavLink to="/" activeStyle>
                    Home
                </NavLink>
                <NavLink to="/Products" activeStyle>
                    Products
                </NavLink>
                <NavLink to="/Orders" activeStyle>
                    Orders
                </NavLink>
                <NavLink to="/cart" activeStyle>
                    Cart
                </NavLink>
                <NavLink to="/signup" activeStyle>
                    Signup
                </NavLink>
                <NavLink to="/adminCreate" activeStyle>
                    Admin: Create
                </NavLink>
                {/* <NavLink to="/adminOrders" activeStyle>
                    Admin: View Orders
                </NavLink>
                <NavLink to="/adminCreateOrders" activeStyle>
                    Admin: New Order
                </NavLink> */}
                <NavLink to="/adminProducts" activeStyle>
                    Admin: Products
                </NavLink>
                
            </NavMenu>
        </nav>
        </>
    );
}

export default Navbar;