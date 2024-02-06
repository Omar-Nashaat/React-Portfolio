import React, { Component } from 'react';
import style from './footer.module.css'


class Footer extends Component {
    render() {
        return <>
            <div className={style.mainFooter}>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div>
                                <h3>LOCATION</h3>
                                <p>2215 John Daniel Drive</p>
                                <p>Clark, MO 65243</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <h3>AROUND THE WEB</h3>
                                <div className={style.footerIcons + " mt-2"}>
                                    <i class="fa-brands fa-facebook"></i>
                                    <i class="fa-brands fa-twitter"></i>
                                    <i class="fa-brands fa-linkedin"></i>
                                    <i class="fa-solid fa-globe"></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div>
                                <h3>ABOUT FREELANCER</h3>
                                <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.footerBottom}>
                <p className='pt-2'>Copyright © Your Website 2021</p>
            </div>
        </>
    }
}

export default Footer;