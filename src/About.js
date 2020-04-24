import React from "react"
import { Link } from 'react-router-dom'


function About() {
    return (
        <div className='about'>
            <div className='aboutMain'>
                <div className='imgInfo'>
                    <img className='me' src="https://res.cloudinary.com/dt5zs08ue/image/upload/v1583201327/port/Screen_Shot_2020-03-02_at_8.08.31_PM_ghsfr1.png"></img>
                    <p><h3 className='infoAboutMe' >I'm a software engineer from San Antonio and I have a passion for coding, superheros, books, and music. I recently finished a software engineering bootcamp with General Assembly and I enjoy working with React, Python, Django, and Drupal.</h3> </p>
                </div>
                <ul className='skills'>
                    <li>HTML</li>
                    <li>JAVASCRIPT</li>
                    <li>CSS</li>
                    <li>REACT</li>
                    <li>MONGODB</li>
                    <li>EXPRESS</li>
                    <li>DJANGO</li>
                    <li>PYTHON</li>
                    <li>BOOTSTRAP</li>
                    <li>DRUPAL</li>
                </ul>
            </div>
            <div className='contact'>
                <ul className='links'>
                    <ul><a className='text-dark' target="_blank" href="https://www.linkedin.com/in/kassidyshade/"><h4>LinkedIn</h4></a></ul>
                    <ul><a className='text-dark' target="_blank" href="https://github.com/KassidySh"><h4>My Github</h4></a></ul>
                    <ul><a className='text-dark' href="mailto:kassidysha@gmail.com"><h4>Email Me</h4></a></ul>
                </ul>
            </div>
        </div>
    )
}

export default About