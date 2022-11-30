import styled from "styled-components";

export const ContactForm = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border: 1px solid black;

  h1 {
    font-size: 2.7rem;
    font-weight: 500;
    color: #444;
  }

  /* input,
  textarea {
    border-bottom: 2px solid #ddd;
    outline: none;
    margin: 0px 0px 16px;
    padding: 16px 0px;
  } */

  .contact {
    padding: 5rem 0;
    background: rgb(226, 226, 226);
  }

  .contact-container {
    max-width: 1200px;
    display: flex;
    background: #fff;
  }

  .contact-img {
    width: 50%;
  }

  .contact-img img {
    display: block;
    height: 400px;
    width: 100%;
    object-position: center;
    object-fit: cover;
  }

  .form-container {
    padding: 1rem;
    width: 50%;
    margin: auto;
  }

  .form-container input {
    display: block;
    width: 100%;
    border: none;
    border-bottom: 2px solid #ddd;
    padding: 1rem 0;
    box-shadow: none;
    outline: none;
    margin-bottom: 1rem;
    font-weight: 500;

    :hover {
      background: #117964;
      transition: color 0.3 ease-in-out;
    }
  }

  .btn {
    background-color: #16a083;
    border-radius: 1rem;
    color: white;
    /* padding: 0.5em 1.5em; */
    width: 85px;
    text-transform: uppercase;
    /* border: none; */
  }

  .form-container textarea {
    display: block;
    width: 100%;
    border: none;
    border-bottom: 2px solid #ddd;
    color: #444;
    outline: none;
    padding: 1rem 0;
    resize: none;
  }

  /* .form-container h1 {
    font-size: 2.7rem;
    font-weight: 500;
    color: #444;
    margin-bottom: 1rem;
    margin-top: -1.2rem;
  } */
`;

export default ContactForm;
