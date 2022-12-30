import React, {useState, useRef, useEffect} from 'react';
import '../Contact/Contact.css';

import emailjs from '@emailjs/browser';
import {MdOutlineEmail} from 'react-icons/md';
import {AiFillLinkedin} from "react-icons/ai";


interface Email {
  fullname : string,
  email : string,
  message : string
}


const Contact = () => {   
    const [inhoud,setInhoud] =useState<Email>({fullname:"",email:"",message:""})
    const [confirm,setConfirm] = useState("confirm")

    useEffect(() => {
      setConfirm("")
    },[])

    const sendEmail = (e:any) => {
      setConfirm("Email verstuurd")
      e.preventDefault()

      let params = {
          fullname : inhoud.fullname,
          email : inhoud.email,
          message : inhoud.message

      }

      emailjs.send('service_ct8u93e','template_6y3pfnr',params,'XC6EExDmSxJ9AuR4C')
      .then((result) => {
        console.log(result.text);
      },(error) => {
        console.log(error.text);
      });
          setInhoud({fullname:"",email:"",message:""})

    };
      
  

    return (
      <>
      <body>
        
        <section id='contact'>
          
          <h2>Contacteer mij</h2>

          <div className="container">
            <div className="contactoptie">
              <article className="contactopties">
                <MdOutlineEmail className="contact-icon"/>
                <h5>Email</h5>
                <a href="mailto:Shubprasain@aol.com" target="_blank">Stuur een bericht</a>
              </article>
              <article className="contactopties">
                <AiFillLinkedin className="contact-icon"/>
                <h5>Linkedin</h5>
                <a href="https://www.linkedin.com/in/shubham-prasain-195399232/">Connecteer met mij</a>
              </article>
             
              </div>
         
             
            <form  onSubmit={(event) =>sendEmail(event)} className='--form-control --card'>
              <input value={inhoud.fullname} placeholder='Uw Naam' type="text" name="fullname"  required onChange={(event) =>setInhoud({fullname:event.target.value,email:inhoud.email,message:inhoud.message})}/>
              <input  value={inhoud.email} type="email" placeholder='Email' name='user_email' required  onChange={(event) =>setInhoud({fullname:inhoud.fullname,email:event.target.value,message:inhoud.message})}/>
              <textarea value={inhoud.message} placeholder="Type uw bericht in" name="message" onChange={(event) =>setInhoud({fullname:inhoud.fullname,email:inhoud.email,message:event.target.value})}></textarea>
              <button type='submit' className='--btn --btn-primary'>Send Message</button>
            </form>
          </div>
        </section>
      </body>
      </>


    )
};

export default Contact;