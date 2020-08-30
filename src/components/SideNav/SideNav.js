import React from 'react';
import './sidenav.css'

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src= 'https://avatars1.githubusercontent.com/u/61117578?s=460&u=5782b71811d65104b5a16c512a8e624ce01ca28d&v=4'
                className="avatar"
                alt="avatar" 
            />
            <h2 className="main-name">Kyle Dahl</h2>
            <p className="subtitle">Web Developer in Austin, Texas</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
            </div>
        </div>
    )
}

