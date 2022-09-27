import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/IMG_E2950.JPG'
import IMG2 from '../../assets/IMG_E2953.JPG'
import IMG3 from '../../assets/IMG_E2954.JPG'

const Portfolio = () => {
    return(
        <section  id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className='portfolio__item'>
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt='' />
                    </div>
                    <h3>This is a Todo List Web Application</h3>
                    <div className="portfolio__item-cta">
                      <a href='https://github.com/sofiattt/todo-list' className='btn' target='_blank'>Github</a>
                      <a href='https://dribbble.com/Alien_pixels/' className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio