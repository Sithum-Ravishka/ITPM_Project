import React from 'react'
import {
    ShoppingBasket,
    AccountCircle,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./topbar.scss";
import logo from './logo.png';

export default function Topbar() {
    return (
        <div className="topbar">
            <ul className="topbarList">
                <div className='topbarLeft'>
                    <Link to="/" className="link">
                        <div className="topbarListlogo">
                            <img component={Link} to="/" src={logo} alt="Logo" className="logo" />
                        </div>
                    </Link>
                </div>
                <div className='topbarRight'>
                    <Link to="/" className="link">
                        <li className="topbarListItem">
                            Home
                        </li>
                    </Link>
                    <Link to="/" className="link">
                        <li className="topbarListItem">
                            Product
                        </li>
                    </Link>
                    <Link to="/about" className="link">
                        <li className="topbarListItem">
                            About
                        </li>
                    </Link>
                    <Link to="/contact" className="link">
                        <li className="topbarListItem">
                            Contact
                        </li>
                    </Link>
                    <Link to="/signin" className="link">
                        <li className="topbarListItem active">
                            Sign In
                        </li>
                    </Link>
                    <Link to="/cart" className="link">
                        <li className="topbarListItem ">
                            <ShoppingBasket className="topbarIcon" />
                        </li>
                    </Link>
                    <Link to="/profile" className="link">
                        <li className="topbarListItem ">
                            <AccountCircle className="topbarIcon" />
                        </li>
                    </Link>
                </div>
            </ul>
        </div>
    )
}
