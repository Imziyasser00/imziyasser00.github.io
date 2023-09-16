import React from 'react'
import './portfolio.css'
import PORT1 from'../../assets/portfolio1.webp'
import PORT2 from'../../assets/portfolio2.webp'
import PORT3 from'../../assets/portfolio3.webp'
import PORT4 from'../../assets/portfolio4.webp'
import PORT5 from'../../assets/portfolio5.webp'
import PORT6 from'../../assets/portfolio6.webp'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORT1} alt="" />
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https//github.com" className='btn'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
         
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORT2} alt="" />
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https//github.com" className='btn'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
         
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORT3} alt="" />
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https//github.com" className='btn'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
         
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORT4} alt="" />
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https//github.com" className='btn'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
         
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORT5} alt="" />
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https//github.com" className='btn'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
         
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={PORT6} alt="" />
          </div>
          <h3>This is a Portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https//github.com" className='btn'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" target='_blank' className='btn btn-primary'>Live Demo</a>
          </div>
         
        </article>
      </div>
    </section>
  )
}

export default Portfolio