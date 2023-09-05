import React from 'react'

function HeroSection() {
    return (
        <section id="heroSection" classname="hero--section">
            <div classname="hero--section--content--box">
                <div className='hero--section--content'>
                <p className='section--title'>Hey, I'm Michiel</p>
                <h1 className='hero--section--title'></h1>
                <span className='hero--section-title..color'>Full Stack</span>{" "}
                <br />
                Developer
                <p className='hero--section-description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti alias quos beatae exercitationem? Laboriosam?
                </p>
                </div>
                <button className='btn btn-primary'>Get In Touch</button>
            </div>
            <div className='hero--ection--img'>
                <img src='./img/hero_img.png' alt='Hero Section' />
            </div>
        </section>
    )
}

export default HeroSection