import React from 'react'
import Title from './Title'
import Resume from '../assets/Antoine_Pineau_CV.pdf'
import logo_Vue from '../assets/images/vue.png';
import logo_React from '../assets/images/react.png';
import logo_Html from '../assets/images/htmlcss.png';
import logo_Figma from '../assets/images/figma.png';
import logo_Node from '../assets/images/node.png';
import logo_MongoDB from '../assets/images/mongodb.png';
import logo_AWS from '../assets/images/aws.png';
import logo_Git from '../assets/images/git.png';

const About = React.forwardRef((props, ref) =>  {
    return (
        <div ref={ref} className="About">
            <Title title="About" />
            
            <div className="description" data-sal="fade" data-sal-duration="1000">
                <div className="text">
                    <p>My name is Antoine Pineau.</p>
                    <p>As a recent graduate in Computer Science, I aspire to become a fullstack web developer.</p>
                </div>
                
                
                <a href={Resume} className="resume" data-sal="zoom-in" download>Resume</a>
            </div>

            <div className="skills">
                <h3 className="title" data-sal="slide-left" data-sal-duration="1000" data-sal-delay="500">Main skills</h3>
                <div className="grid" >
                    <div className="grid-item"><img src={logo_Vue} data-sal="flip-up" data-sal-duration="1000" alt="VueJS"/></div>
                    <div className="grid-item"><img src={logo_Html} data-sal="flip-up" data-sal-duration="1000" alt="HtmlCss"/></div>
                    <div className="grid-item"><img src={logo_Node} data-sal="flip-up" data-sal-duration="1000" alt="NodeJS"/></div>
                    <div className="grid-item"><img src={logo_AWS} data-sal="flip-up" data-sal-duration="1000" alt="AWS"/></div>
                    <div className="grid-item"><img src={logo_React} data-sal="flip-up" data-sal-duration="1000" alt="ReactJS"/></div>
                    <div className="grid-item"><img src={logo_Figma} data-sal="flip-up" data-sal-duration="1000" alt="Figma"/></div>
                    <div className="grid-item"><img src={logo_MongoDB} data-sal="flip-up" data-sal-duration="1000" alt="MongoDB"/></div>
                    <div className="grid-item"><img src={logo_Git} data-sal="flip-up" data-sal-duration="1000" alt="Git"/></div>
                </div>
            </div>

        </div>
    )
})

export default About;