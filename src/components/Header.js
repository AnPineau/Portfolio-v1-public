import React from 'react'

export default function Header({ scrollTo }) {

    function handleScrollToHome() { scrollTo('Home'); }
    function handleScrollToAbout() { scrollTo('About'); }
    function handleScrollToProjects() { scrollTo('Projects'); }
    function handleScrollToContact() { scrollTo('Contact'); }

    return (
        <nav className="Header">
            <ul>
                <li><button className="btn" type="button" onKeyDown={handleScrollToHome}><div className="btn__content" role="button" tabIndex={-1} onClick={handleScrollToHome} onKeyDown={handleScrollToHome}>Home</div>
                </button></li>
                <li><button className="btn" type="button" onKeyDown={handleScrollToAbout}><div className="btn__content" role="button" tabIndex={-1} onClick={handleScrollToAbout} onKeyDown={handleScrollToAbout}>About</div></button></li>
                <li><button className="btn" type="button" onKeyDown={handleScrollToProjects}><div className="btn__content" role="button" tabIndex={-1} onClick={handleScrollToProjects} onKeyDown={handleScrollToProjects}>Projects</div></button></li>
                <li><button className="btn" type="button" onKeyDown={handleScrollToContact}><div className="btn__content" role="button" tabIndex={-1} onClick={handleScrollToContact} onKeyDown={handleScrollToContact}>Contact</div></button></li>
            </ul>
        </nav>
    )
}   
