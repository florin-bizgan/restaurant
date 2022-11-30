import React from "react";
// eslint-disable-next-line
import { Formik } from "formik";
import * as S from "./contact-form.style";
import { Flex } from "../flex";

const ContactForm = () => {
  return (
    <div>
      <S.ContactForm>
        <div className='contact'>
          <div className='contact-container container'>
            <Flex>
              <img
                src='https://i.postimg.cc/1XvYM67V/restraunt2.jpg'
                alt=''
                className='contact-img img'
              />
              <div className='form-container'>
                <h1>Contact Us</h1>
                <input name='name' type='text' placeholder='Your Name' />
                <input name='email' type='text' placeholder='Email' />
                <textarea
                  name='message'
                  placeholder='Your Message Here'
                  rows='5'
                />
                <input className='btn' type='submit' value='Submit' />
              </div>
            </Flex>
          </div>
        </div>
      </S.ContactForm>
    </div>
  );
};

export default ContactForm;
