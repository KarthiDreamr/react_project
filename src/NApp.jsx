import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function NApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="blogs" element={<Blogs />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </BrowserRouter>
    );
}

function Home() {
    return (
        <div className="home">
            <h1>Welcome to my Home</h1>
            <p>This is a simple blog app built with React and React Router.</p>
            <p>You can read my latest posts, or contact me if you have any questions.</p>
            <Link to="/blogs" className="btn">View Blogs</Link>
            <br />
            <Link to="/contact" className="btn">Contact Me</Link>
        </div>
    );
}

function Blogs() {
        return (
            <div className="blogs">
                <h1>Welcome to my blog</h1>
                <p>This is a simple blog app built with React and React Router.</p>
                <p>You can read my latest posts, or contact me if you have any questions.</p>
                <Link to="/" className="btn">View Home</Link>
                <br />
                <Link to="/contact" className="btn">Contact Me</Link>
            </div>
        );
    }

    function Contact() {
        return (
            <div className="contact">
                <h1>Welcome to my Contact</h1>
                <p>This is a simple blog app built with React and React Router.</p>
                <p>You can read my latest posts, or contact me if you have any questions.</p>
                <Link to="/" className="btn">View Home</Link>
                <br />
                <Link to="/blogs" className="btn">View Blogs</Link>
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
        );    }

