import React from "react";
import { Link } from 'react-router-dom';

const Navigation = (props) => {
    return(
        <nav className="navbar navbar-expand-sm bg-info navbar-dark custom-navbar">
            <span className="logo">POKEDEX</span>
            <ul className="navbar-nav">
                {
                    props.navigation.map((item)=> {
                        return (
                            <li className="nav-item active">
                                <Link className="nav-link" href="#" to={item.directTo} >
                                    {item.name}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Navigation;