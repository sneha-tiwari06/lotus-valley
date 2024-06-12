import React from 'react'

function Navbar() {
    return (
        <div className='w-100'>

            <nav className="head w-100">
                
                    <div className='header'>
                        <div className="social-icons">
                            <ul className='social'>
                                <li>
                                    <a href='/'> <i class="fa-brands fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href='/'> <i class="fa-brands fa-instagram"></i></a>
                                </li>
                                <li>
                                    <a href='/'>  <i class="fa-brands fa-x-twitter"></i></a>
                                </li>
                            </ul></div>
                        <div className='sub-heading'>
                            <ul className='sub-head'>
                                <li className='items-sub-head'><a href='/'>About Us</a></li>
                                <li className='items-sub-head'><a href='/'>Learning Approach</a></li>
                                <li className='items-sub-head'><a href='/'>Admissions</a></li>
                                <li className='items-sub-head'><a href='/'>News & Events</a></li>
                                <li className='items-sub-head'><a href='/'>Contact Us</a></li>
                                <li className='items-sub-head'><a href='/'>Mandatory Public Disclosure</a></li>
                            </ul>

                        </div>
                    </div>
              
            </nav>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className='container'>

                    <div className='w-100 text-center'>
                        <div className='logo'>
                            <img className='img-logo' src='../assets/logo-5.png' alt=''></img>
                            {/* <img className='img-logo' src='../assets/logo.jpg' alt=''></img> */}
                        </div>
                    </div>
                </div>

            </nav>


        </div>

    )
}

export default Navbar