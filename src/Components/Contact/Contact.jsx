import React, { Component } from 'react';
import style from './contact.module.css'
import Footer from '../footer/Footer';
import Nav from '../navbar/Nav';


class Contact extends Component {
    render() {
        return <>
        <Nav />
            <div className="container">
                <div className={style.home}>
                    <div className={style.allDiv + "d-flex"}>
                        <h1 className='mb-3 text-center fw-bolder'>CONATCT SECTION</h1>
                        <div className="d-flex gap-3 justify-content-center flex-column">
                            <div className="d-flex gap-3 justify-content-center">
                                <div className={style.divBefore}></div>
                                <i class="fa-solid fa-star"></i>
                                <div className={style.divBefore}></div>
                            </div>
                            <div className="mt-5">
                                <div class="mb-3">
                                    <input type="email" className={style.inputs + " form-control w-50 m-auto mb-5"} placeholder='userName' />
                                    <input type="email" className={style.inputs + " form-control w-50 m-auto mb-5"} placeholder='userAge' />
                                    <input type="email" className={style.inputs + " form-control w-50 m-auto mb-5"} placeholder='userEmail' />
                                    <input type="email" className={style.inputs + " form-control w-50 m-auto mb-5"} placeholder='userPassword' />
                                    <button className='btn btn-success d-flex mb-5 m-auto'>Send Messege</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <Footer />

        </>;
    }
}

export default Contact;