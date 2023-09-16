import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import IMG2 from '../../assets/img2.jpeg'

function About() {
  return (
    <section className='about' id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <img src={IMG2} alt="me" />
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers />
              <h5>Clients</h5>
              <small>120+ Worlwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In perspiciatis, at commodi omnis dignissimos voluptas eaque officiis beatae laborum facilis officia alias doloremque id. Error eum officiis earum. Veritatis, nulla?
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About