import React, { useState } from 'react'
import Img from '../Assets/img.jpg'
import '../Components/About.css'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  const [readMore,setReadMore]=useState(true);
  const [readMoreProject,setReadMoreProject]=useState(true)
  const handleReadMore=()=>{
    setReadMore(!readMore)
  }
  const handleReadMoreProject=()=>{
    setReadMoreProject(!readMoreProject)
  }
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me_img'>
             <img src={Img} alt='img'/>
          </div>

        </div>
        <div className='about_content'>
       <div className='about_cards'>
        {
          readMore ? <article className={readMore ? 'experience': 'exp_details'}>
          <FaAward className='about_icon'/>
          <h5>Experience</h5>
          <small className='small' onClick={handleReadMore}>{readMore?"Read More":"Read Less"}</small>
        </article> :  <article className={readMore ? 'experience': 'exp_details'}>
          <FaAward className='about_icon'/>
          <h2>Experience</h2>
          <div className='wrapper_experience'>
             <p className='heading_exp'>Project Engineer | Lennart Engineering</p>
             <p>
              DEC 2020 – TO TILL DATE
              </p>
              <h5>
              Manage the work site and execute the work plan
              </h5>
          </div>
          <div>
             <p>Painting Engineer | L&T Valves Limited.</p>
             <p>
             JULY 2016 – NOV 2020
             </p>
             <h5>Supervising the paint shop and coordinating the TPI inspectors.</h5>
          </div>
          <div className='small_detail'>
          <p id='ggg' onClick={handleReadMore}>{readMore?"Read More":"Read Less"}</p>
          </div>
        </article>
        }
         
        {
         readMoreProject ? <article className={readMoreProject ? 'projects': 'projects_details'}>
         <VscFolderLibrary className='about_icon'/>
         <h5>Sample Workes</h5>
         <small className='small' onClick={handleReadMoreProject}>{readMoreProject?"Read More":"Read Less"}</small>
       </article> :  <article className={readMoreProject ? 'projects': 'projects_details'}>
         <VscFolderLibrary className='about_icon'/>
         <h2>Sample Workes</h2>
         <div className='wrapper_projects'>
            <p className='heading'></p>
            <p><a href=''>Weather App</a></p>
            <p><a href=''>Bmi App</a></p>
            <p><a href=''>Social App</a></p>
         </div>
         <small id='ggg'onClick={handleReadMoreProject}>{readMoreProject?"Read More":"Read Less"}</small>
       </article>  
        }
         
       </div>
       <p>
       Self-motivated IT professional with deep knowledge and proficiency in JavaScript, React JS, Redux, HTML, CSS, and mobile responsive website development, seeks the position of Front-end Developer.
       </p>
       <a href='#contact' className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
       
    </section>
  )
}

export default About