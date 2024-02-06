import React, { Component } from 'react';
import homeImg from './images/home.png';
import style from './home.module.css'
import Nav from '../navbar/Nav';
import Footer from '../footer/Footer';


class Home extends Component {
    state = {
    }
    render() {
        return <>
            <Nav />
            <div className={style.home}>
                <div className="d-flex flex-column justify-content-center align-items-center text-white">
                    <img src={homeImg} alt="human" className={style.homeImg + ' mb-3'} />
                    <h1 className='mb-2'>START FRAMEWORK</h1>
                    <div className="d-flex gap-3">
                        <div className={style.divBefore}></div>
                        <i class="fa-solid fa-star"></i>
                        <div className={style.divBefore}></div>
                    </div>
                    <h5 className='mt-2 mb-5 pb-5'>Graphic Artist - Web Designer - Illustrator</h5>
                </div>
            </div>
            <Footer />
        </>
    }
}

export default Home;