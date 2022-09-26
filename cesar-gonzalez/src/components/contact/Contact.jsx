
import './contact.css'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ha37b1n', 'template_p7md66h', form.current, 'stObboWRFCWG-ZWL4')
     e.target.reset()
  };

  return (
    <section id="contact">
      <h2>Let's Connect</h2>
    
      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <MdOutlineMarkEmailUnread className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>gcesar13@yahoo.com</h5>
          <a href="mailto:gcesar13@yahoo.com" target="_blank">Message Me </a>
        </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="First and Last Name" required/>
          <input type="email" name="email" placeholder="Email" required/>
          <textarea name="message" rows="7" required></textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact