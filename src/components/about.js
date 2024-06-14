import React from 'react';

function About() {
    return (
        <div className='about-us-section'>
            <section className="about-welcome-section welcome-section-padding">
                <div className="about-container container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 mb-lg-0 mb-lg-0 mb-5">
                            <div className="about-desc">
                                <h4 className="about-head"><i className="icofont-plus"></i> About Us</h4>
                                <h2 className="my-4" style={{color:"#8B221A"}}>Lotus Valley International School, Gurugram</h2>
                                <p>we aspire to craft socially conscious, self-aware and responsible global citizens who will construct, shape, and serve society.</p>
                                <p className="my-4"><b>The school proposes to create a system that is aligned with the aspirational goals of state-of-the-art education, including SDG4 while building upon India’s traditions and value systems.</b></p>
                                <div className="about-btn wow fadeInUp">
                                    <a href="/" className="about-us-into-btn-2 mr-2">Read More</a>
                                    <a href="/" className="about-us-into-btn-icon"><i className="fa-solid fa-play" ></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="about-wel-img-sec img-overlay">
                                <a className="vdobox" data-autoplay="true" data-vbtype="video" data-title="Intro Video" data-gall="videoh" href="/"><i className="fa-solid fa-play" style={{ color: "black" }}></i></a>
                                <div className="img-wrap">
                                    <img className="img-fluid" src="../assets/about.jpg" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    );
}

export default About;
