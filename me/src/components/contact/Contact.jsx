import React from 'react'
import './contact.css'
import {MdMailOutline} from 'react-icons/md'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import { useRef } from 'react'


const Contact = () => {
  const form = useRef();

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bjcd2dr', 'template_6fskxoc', form.current, 'EXblvznXF0QpyDOZ9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <BsInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>@yass__ser</h5>
            <a href="https://instagram.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <MdMailOutline className='contact__option-icon' />
            <h4>Mail</h4>
            <h5>imziyasser00@gmail.com</h5>
            <a href="mailto:imziyasser00@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon' />
            <h4>Whatsapp</h4>
            <h5>0702703561</h5>
            <a href="https://api.whatsapp.com/send?phone=0702703561" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your emaile' required/>
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact