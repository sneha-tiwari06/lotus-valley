import React from 'react'

function Nav() {
    return (
        <div className='w-100'>
            <nav className="navbar2 navbar-expand-lg ">
                <div className='container'>
                    <div className='header-nav'>


                        <ul className='main-head'>

                            <li className='items'><a href='/'>Awards & Achievments</a></li>
                            <li className='items'><a href='/'>Gallery</a></li>
                            <li className='items'><a href='/'>Careers</a></li>
                            <li className='items'><a href='/'>School Calendar</a></li>
                            <li className='items'><a href='/'>Alumini</a></li>
                            <li className='items'><a href='/'>eMagezine</a></li>
                            <li className='items'><a href='/'>CUET</a></li>
                        </ul>

                    </div>
                </div>


            </nav>
            <div className='banner'>
                <img className ='banner-img'src='../assets/banner.jpg' alt=''></img>
            </div>

        </div>

    )
}

export default Nav