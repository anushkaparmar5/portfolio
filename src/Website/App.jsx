import React from 'react'
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import Header from './Header';
import AddUser from './AddUser';
import Users from './Users';
import '/node_modules/bootstrap/dist/css/bootstrap.min.css'
import '/node_modules/bootstrap/dist/js/bootstrap.min.js'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<AddUser />} />
                <Route path='/users' element={<Users />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
