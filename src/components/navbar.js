import React from 'react'

function Navbar() {
    return (
        <div className='w-100'>

            <nav className="head w-100">

                <div className='header'>
                    <div className="social-icons">
                        <ul className='social'>
                            <li className='highlighted-item'>
                                <a href='/'><i class="fa-solid fa-phone-volume query"></i>+91 12345 67890</a>
                            </li>

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
                            <li className='items-sub-head'><i class="fa-solid fa-info sub-head-icon"></i><a href='/'>About Us</a></li>
                            <li className='items-sub-head'><i class="fa-solid fa-book-open sub-head-icon"></i><a href='/'>Learning Approach</a></li>
                            <li className='items-sub-head'><i class="fa-solid fa-building-columns sub-head-icon"></i><a href='/'>Admissions</a></li>
                            <li className='items-sub-head'><i class="fa-solid fa-newspaper sub-head-icon"></i><a href='/'>News & Events</a></li>
                            <li className='items-sub-head'><i class="fa-regular fa-address-card sub-head-icon"></i><a href='/'>Contact Us</a></li>
                            <li className='items-sub-head'><i class="fa fa-asterisk sub-head-icon"></i><a href='/'>Mandatory Public Disclosure</a></li>
                        </ul>

                    </div>
                </div>

            </nav>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className='container'>

                    <div className='w-100 text-center'>
                        <div className='logo'>
                            <img className='img-logo' src='../assets/logo-5.png' alt=''></img>
                            <button class="admission">Admission 2024-25</button>
                        </div>
                    </div>
                </div>

            </nav>


        </div>

    )
}

export default Navbar