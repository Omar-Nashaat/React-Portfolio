import React, { Component } from 'react';
import style from './about.module.css';
import Nav from '../navbar/Nav';
import Footer from '../footer/Footer';


class About extends Component {
    state = {

    }
    render() {
        return <>
            <Nav />
            <div className={style.home}>
                <div className="text-white">
                    <h1 className={style.mainHead + ' mb-4 text-center'}>ABOUT COMPONENT</h1>
                    <div className="d-flex gap-3 justify-content-center">
                        <div className={style.divBefore}></div>
                        <i class="fa-solid fa-star"></i>
                        <div className={style.divBefore}></div>
                    </div>
                    <div className={style.detailsDiv + " d-flex justify-content-center mt-3"}>
                        <div className="col-md-4">
                            <div className="content"></div>
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                        <div className="col-md-4">
                            <div className="content"></div>
                            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    }
}

export default About;