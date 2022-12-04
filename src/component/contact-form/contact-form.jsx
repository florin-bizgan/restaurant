import React from "react";
import Image from "../images/restraunt2.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import * as S from "./contact-form.style";

const ContactForm = () => {
  return (
    <div>
      <section id='contact'>
        <S.ContactForm>
          <div className='contact'>
            <div className='contact-container container'>
              <div className='contact-img'>
                {/* <img
                  src='https://i.postimg.cc/1XvYM67V/restraunt2.jpg'
                  alt=''
                  className='contact-img img'
                  loading='lazy'
                /> */}
                <LazyLoadImage
                  src={Image}
                  alt='Image Alt'
                  className='contact-img img'
                />
              </div>
              <div className='form-container'>
                <div className='form'>
                  <h2>Contact Us</h2>
                  <input name='name' type='text' placeholder='Your Name' />
                  <input name='email' type='text' placeholder='Email' />
                  <input
                    className='btn'
                    name='message'
                    type='text'
                    placeholder='Your Message Here'
                  />
                </div>
                <input className='button' type='button' value='Submit' />
              </div>
            </div>
          </div>
        </S.ContactForm>
      </section>
    </div>
  );
};

export default ContactForm;
