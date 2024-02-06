import React, { Component } from 'react';
import style from './nav.module.css'
import Home from '../Home/Home';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Portfolio from '../portfolio/Portfolio';
import Footer from '../footer/Footer';
import { Link } from 'react-router-dom';



class Nav extends Component {


    render() {

        function changeToPortfolio() {
            document.getElementById('port').classList.add('nav_activeLink__nUIpN');
        }

        function changeToContact() {
            document.getElementById('contact').classList.add('nav_activeLink__nUIpN');
        }

        function changeToAbout() {
            document.getElementById('about').classList.add('nav_activeLink__nUIpN');
        }

        return <>
            <nav className={style.navEdit + " navbar navbar-expand-lg p-4"}>
                <div className="container">
                    <Link className={style.navMain} to="/home">START FRAMEWORK</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item p-2">
                                <Link className={style.noramlNav} aria-current="page" to="/about" id='about' onClick={changeToAbout}>ABOUT</Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link className={style.noramlNav} to="/portfolio" id='port' onClick={changeToPortfolio}>PORTFOLIO</Link>
                            </li>
                            <li className="nav-item p-2">
                                <Link className={style.noramlNav} to="/contact" id='contact' onClick={changeToContact}>CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    }
}

export default Nav;