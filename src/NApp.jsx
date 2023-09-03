import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home'

export default function NApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}

function Dashboard() {
    return (
        <div className="dashboard">
            <h1>Welcome to my blog</h1>
            <p>This is a simple blog app built with React and React Router.</p>
            <p>You can read my latest posts, or contact me if you have any questions.</p>
            <Link to="/" className="btn">View Home</Link>
            <br />
            <Link to="/contact" className="btn">Contact Me</Link>
        </div>
    );
}

function NoPage() {
    return (
        <div className="contact">
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <Link to="/" className="btn">View Home</Link>
        </div>
    );
}

