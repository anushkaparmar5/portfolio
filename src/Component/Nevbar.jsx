import React from 'react'
import '../index.css';
import { Outlet, Link } from "react-router-dom";

const Nevbar = () => {
    return (
        <div>
            <div className='fixed d-flex justify-content-between items-center text-grey-300  header '>
                <nav class="navbar navbar-expand-lg navbar-light bg-[098] items-center ">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>


                    <div class="collapse navbar-collapse " id="navbarTogglerDemo03">
                        <ul class="navbar-nav  d-flex justify-content-between text-center items-center">

                            <li class="nav-item m-2">
                                <Link to="/">Home</Link>
                            </li>
                            <li class="nav-item m-2">
                                <Link to="/skill">Skill</Link>
                            </li>
                            <li class="nav-item m-2">
                                <Link to="/Work">Work</Link>
                            </li>
                            <li class="nav-item m-2">
                                <Link to="/projects">Projects</Link>
                            </li>
                            <li class="nav-item m-2">
                                <Link to="/contect">Contect</Link>
                            </li>
                        </ul>

                        <Outlet />
                    </div>
                </nav>
                <div className='md:hidden z-10'>
                    {/* <FaBars/> */}
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Nevbar
