import React from 'react';
import './navbar.css';

const Navbar = () => {
    return (
        <div>
                <nav className="navbar navbar-default navbar-home">
                    <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">PIZZA CAFE</a>
                    </div>
                
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Pizza Cafe</a></li>
                            <li><a href="#">Pizza Types</a></li>
                        </ul>
                    </div>
                </nav>
        </div>
    );
}

export default Navbar;
