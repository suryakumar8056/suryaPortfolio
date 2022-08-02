import React from 'react'
import{BiCheck} from 'react-icons/bi'
import '../Components/Services.css'

const Services = () => {
  return (
    <section id="services">
     <h5>What I Do</h5>
     <h2>Services</h2>
     <div className='container services_container'>
         <article className='service'>
             <div className='services_head'>
                 <h3>UI Developement</h3>
             </div>
             <ul className='services_list'>
                 <li>
                     <BiCheck className='sevice_list_icon'/>
                     <p>User Interface development.</p>
                 </li>
                 <li>
                     <BiCheck className='sevice_list_icon'/>
                     <p>React Js Developement.</p>
                 </li>
                 <li>
                     <BiCheck className='sevice_list_icon'/>
                     <p>Optimize applications for maximum speed.</p>
                 </li>
                 <li>
                     <BiCheck className='sevice_list_icon'/>
                     <p>Familiarity with RESTful APIs..</p>
                 </li>
                 <li>
                     <BiCheck className='sevice_list_icon'/>
                     <p>Thorough understanding of React.js and its core principles.</p>
                 </li>
                 <li>
                     <BiCheck className='sevice_list_icon'/>
                     <p>Familiarity with code versioning tools git & bitbucket..</p>
                 </li>
                 <li>
                     <BiCheck className='sevice_list_icon'/>
                     <p>Collaborate with back-end developers and web designers to improve usability.</p>
                 </li>
                 <li>
                     <BiCheck className='sevice_list_icon'/>
                     <p>Stay up-to-date on emerging technologies.</p>
                 </li>
             </ul>
         </article>
       {/*  <article className='service'>
             <div className='services_head'>
                 <h3>Web Developement</h3>
             </div>
             <ul className='services_list'>
                 <li>
                     <BiCheck className='sevice_list_icon'/>
                     <p>orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </li>
                 <li>
                     <BiCheck className='sevice_list_icon'/>
                     <p>orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </li>
                 <li>
                     <BiCheck className='sevice_list_icon'/>
                     <p>orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </li>
                 <li>
                     <BiCheck className='sevice_list_icon'/>
                     <p>orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </li>
                 <li>
                     <BiCheck className='sevice_list_icon'/>
                     <p>orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </li>
                 <li>
                     <BiCheck className='sevice_list_icon'/>
                     <p>orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </li>
                 <li>
                     <BiCheck className='sevice_list_icon'/>
                     <p>orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </li>
             </ul>
         </article>
       {/*  <article className='service'>
             <div className='services_head'>
                 <h3>Content Creation</h3>
             </div>
             <ul className='services_list'>
                 <li>
                     <BiCheck className='sevice_list_icon'/>
                     <p>orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </li>
                 <li>
                     <BiCheck className='sevice_list_icon'/>
                     <p>orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </li>
                 <li>
                     <BiCheck className='sevice_list_icon'/>
                     <p>orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </li>
                 <li>
                     <BiCheck className='sevice_list_icon'/>
                     <p>orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </li>
                 <li>
                     <BiCheck className='sevice_list_icon'/>
                     <p>orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </li>
                 <li>
                     <BiCheck className='sevice_list_icon'/>
                     <p>orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </li>
                 <li>
                     <BiCheck className='sevice_list_icon'/>
                     <p>orem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </li>
             </ul>
  </article>*/}
     </div>
    </section>
  )
}

export default Services