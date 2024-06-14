import React from 'react';

function Events() {
    return (
        <div className="padding event-area  pt--120 pb--80 mb-4">
        <div className="container">
            <div className="row">
                <div className="col-md-10 offset-md-1">
                    <div className="section-title-style2 black-title text-center">
                        {/* <span>Join with us</span> */}
                        <h1 className='heading'>Upcoming Events</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <div className="media align-items-center mb-5">
                        <div className="media-head primary-bg" id="media1">
                            <span><sub>May</sub>03</span>
                            <p>2024</p>
                        </div>
                        <div className="media-body">
                            <h4><a href="/">Lotus Sansad</a></h4>
                            <p><i className="fa fa-clock-o"></i>05:23 AM - 09:23 AM</p>
                        </div>
                    </div> 
                </div>
                <div className="col-md-6">
                    <div className="media align-items-center mb-5">
                        <div className="media-head primary-bg" id="media2">
                            <span><sub>May</sub>04</span>
                            <p>2024</p>
                        </div>
                        <div className="media-body">
                            <h4><a href="/">Lotus Sansad</a></h4>
                            <p><i className="fa fa-clock-o"></i>05:23 AM - 09:23 AM</p>
                        </div>
                    </div> 
                </div>
                <div className="col-md-6">
                    <div className="media align-items-center mb-5">
                        <div className="media-head primary-bg" id="media2">
                            <span><sub>May</sub>03</span>
                            <p>2024</p>
                        </div>
                        <div className="media-body">
                            <h4><a href="/">Lotus Sansad</a></h4>
                            <p><i className="fa fa-clock-o"></i>05:23 AM - 09:23 AM</p>
                        </div>
                    </div> 
                </div> 
                <div className="col-md-6">
                    <div className="media align-items-center mb-5">
                        <div className="media-head primary-bg" id="media1">
                            <span><sub>May</sub>04</span>
                            <p>2024</p>
                        </div>
                        <div className="media-body">
                            <h4><a href="/">Lotus Sansad</a></h4>
                            <p><i className="fa fa-clock-o"></i>05:23 AM - 09:23 AM</p>
                        </div>
                    </div> 
                </div>  
            </div>
        </div>
    </div>
    );
}

export default Events;
