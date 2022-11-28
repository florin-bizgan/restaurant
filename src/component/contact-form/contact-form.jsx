import React from "react";
import { Formik } from "formik";
import * as S from "./contact-form.style";

const ContactForm = () => {
  return (
    <div>
      <Formik>
        <S.ContactForm>
          <h1>Contact Us</h1>
          <input name='name' type='text' placeholder='Your Name' />
          <input name='email' type='text' placeholder='Email' />
          <textarea name='message' placeholder='Your Message Here' rows='5' />
          <input className='submit' type='submit' value='Submit' />
        </S.ContactForm>
      </Formik>
    </div>
  );
};

export default ContactForm;
