import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../Pages/Home'
import SignIn from '../Pages/SignIn';

export default function AppRouter() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" exact element={<SignIn />} />
                    <Route path="/Home" exact element={<Home />} />
                </Routes>
            </Router>
        </>
    )
}
