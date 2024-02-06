import React, { Component } from 'react';
import img1 from './images/poert1.png';
import img2 from './images/port2.png';
import img3 from './images/port3.png';
import style from './portfolio.module.css'
import Footer from '../footer/Footer';
import Nav from '../navbar/Nav';


class Portfolio extends Component {
    render() {
        return <>
            <Nav/>
            <div className={style.home}>
                <div>
                    <h1 className={style.textHead + ' mb-2 text-center mb-3'}>PORTFOLIO COMPONENT</h1>
                    <div className="d-flex gap-3 justify-content-center">
                        <div className={style.divBefore}></div>
                        <i class="fa-solid fa-star"></i>
                        <div className={style.divBefore}></div>
                    </div>
                </div>
                <div className="container">
                    <div className="row g-5 pt-3 pb-4">
                        <div className="col-md-4">
                            <div className={style.content + " position-relative"}>
                                <img src={img1} alt="" className='w-100 rounded-3' />
                                <div className={style.layer + ' rounded-3'}><i class="fa-solid fa-plus"></i></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={style.content + " position-relative"}>
                                <img src={img2} alt="" className='w-100 rounded-3' />
                                <div className={style.layer + ' rounded-3'}><i class="fa-solid fa-plus"></i></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={style.content + " position-relative"}>
                                <img src={img3} alt="" className='w-100 rounded-3' />
                                <div className={style.layer + ' rounded-3'}><i class="fa-solid fa-plus"></i></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={style.content + " position-relative"}>
                                <img src={img1} alt="" className='w-100 rounded-3' />
                                <div className={style.layer + ' rounded-3'}><i class="fa-solid fa-plus"></i></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={style.content + " position-relative"}>
                                <img src={img2} alt="" className='w-100 rounded-3' />
                                <div className={style.layer + ' rounded-3'}><i class="fa-solid fa-plus"></i></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className={style.content + " position-relative"}>
                                <img src={img3} alt="" className='w-100 rounded-3' />
                                <div className={style.layer + ' rounded-3'}><i class="fa-solid fa-plus"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    }
}

export default Portfolio;