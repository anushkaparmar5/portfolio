import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './Website.css'
const Header = () => {
    return (
        <div>
            <nav >
                <ul className='list'>
                    <div className='space'>
                        <div>
                            <li class="nav-item m-2">
                                <Link to="/">Add User</Link>
                            </li>
                        </div>
                        <div>
                            <li class="nav-item m-2">
                                <Link to="/users">Users</Link>
                            </li>
                        </div>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Header
