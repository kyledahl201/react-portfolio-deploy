import React from 'react';

import { about } from './../../constants/About'
import './about.css';

export const About = (props) => {
    return (
        <div className="about-container">
            {about.bio}
            <br></br>
            <br></br>
            {about.bio2}
        </div>
    )
}