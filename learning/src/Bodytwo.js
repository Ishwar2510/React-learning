import React from 'react';
import News from './News'
function BodyTwo(){
    
    return (
        <section className="py-5 bg-light">
        <div className="container px-5">
            <div className="row gx-5">
                <div className="col-xl-8">
                    <h2 className="fw-bolder fs-5 mb-4">News</h2>
                    <News/>
                    <News/>
                    <News/>
                    
                    <div className="text-end mb-5 mb-xl-0">
                        <a className="text-decoration-none" href="#!">
                            More news
                            <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>
                <div className="col-xl-4">
                    <div className="card border-0 h-100">
                        <div className="card-body p-4">
                            <div className="d-flex h-100 align-items-center justify-content-center">
                                <div className="text-center">
                                    <div className="h6 fw-bolder">Contact</div>
                                    <p className="text-muted mb-4">
                                        For press inquiries, email us at
                                        <br />
                                        <a href="#!">press@domain.com</a>
                                    </p>
                                    <div className="h6 fw-bolder">Follow us</div>
                                    <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-twitter"></i></a>
                                    <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-facebook"></i></a>
                                    <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-linkedin"></i></a>
                                    <a className="fs-5 px-2 link-dark" href="#!"><i className="bi-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default BodyTwo;