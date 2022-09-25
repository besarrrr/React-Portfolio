import React from 'react'
import './about.css'
import ME2 from '../../assets/aboutme.png'
import {FaAward} from 'react-icons/fa'
import {AiFillFolderOpen} from 'react-icons/ai'
import {MdSportsGolf} from 'react-icons/md'

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>

      <div className="container about__container"> 
      <div className="about__me">
      <div className="about__me-image">
        <img src={ME2} alt="me"/>
      </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small> Recent Graduate of UT Austin Coding Bootcamp</small>
            </article>

            <article className="about__card">
              <MdSportsGolf className='about__icon'/>
              <h5>Hobbies</h5>
              <small> Ski, Golf, Boardgames</small>
            </article>

            <article className="about__card">
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small> Open to anything!</small>
            </article>
        </div>

        <p>
        I am currently in full-stack software
        engineering bootcamp through the University of Texas at Austin and I am open for work. I am excited about applying what I have
        learned in the class room in a real world setting. In any role, I look for an environment that is collaborative and fosters continual learning. I am
        looking to learn more in a diverse technology ecosystem within a highly collaborative applications development
        team. I am an ambitious problem solver leveraging a background in customer service to
        deliver client satisfaction through leadership and technical know-how. 
        </p>

        <a href="#contact" className="btn btn-primary"> Connect</a>

      </div>
      </div>
    </section>
  )
}

export default About