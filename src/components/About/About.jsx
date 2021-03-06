import React from 'react'
import './AboutStyle.css'
import sailormoon3 from '../img/sailormoon3.gif'
import cordelia from '../img/Cordelia-Headshot.png'


const About = () => {
    return (
        <div id='about' className='about-container'>
            <h1>
                <img src={sailormoon3} alt="sailor moon staff" />
                About Me
                <img src={sailormoon3} alt="sailor moon staff" />
            </h1>
            <div className='about-box'>
                {/* <div className='gifs'>
                    <img src={sailormoon} alt="" />
                </div> */}
                <div className='summary'>
                    <div className='summary-box'>
                        <p><img src={cordelia} alt="" />I have been working in the fashion industry for 4 years, starting off as a visual merchandiser at Forever 21 and working my way to becoming a social media associate for Dolls Kill specializing in making video content and Pinterest boards.</p>
                        <p>I have been pursing artistic skating for 5 years with high marks in performance and personality. I have skated for entertainment purposes with Netflix & advertised skates for various skate brands like Sugar Thrillz, C7 skates, and Impala. Skating & fashion are two mediums I use to express myself & I am incredibly lucky to have success in both.</p>
                    </div>
                </div>
                <div className='skills'>
                    <div className='skills-box'>
                        <div className='skill'>
                            <h3><u>Aesthetics</u></h3>
                            <p>Using knowledge of different aesthetics to make products look appealing to a wide audience. Whatever your brand is, I got you! I have been an avid Pinterest and tumblr user for 10 years and know exactly how to curate a vision no matter what you’re customers vibe is.</p>
                        </div>
                        <div className='skill'>
                            <h3><u>Product Focused</u></h3>
                            <p>This is not about me wanting free clothes or a tag on IG. I am here to make a product look good! My content focuses on showing off profit details and making something looking rad af</p>
                        </div>
                        <div className='skill'>
                            <h3><u>Engaging</u></h3>
                            <p>This not only means content that makes a someone stop to look at a product but also staying in with latest memes or “inside jokes” of the internet.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About
