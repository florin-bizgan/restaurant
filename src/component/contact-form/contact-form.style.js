import styled from "styled-components";

export const ContactForm = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  /* ........ Contact Us........... */
  .contact {
    padding: 5rem 0;
    background: rgb(226, 226, 226);
  }

  .contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    /* height: 400px; */
  }

  /* Image Area */
  .image {
    display: block;
    width: 600px;
  }

  .contact-img {
    display: block;
    width: 100%;
    height: 400px;
    object-position: center;
    object-fit: cover;
  }

  /* Form Area */
  .form-container {
    height: 400px;
    width: 100%;
    padding: 16px;
    background: #fff;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
      color: #444;
      font-size: 2.7rem;
      font-weight: 500;
      margin-bottom: 1rem;
      margin-top: -1.2rem;
    }

    input {
      display: block;
      border: none;
      border-bottom: 2px solid #ddd;
      margin-bottom: 1rem;
      padding: 1rem 0;
      /* box-shadow: none; */
      outline: none;
      color: #444;
      font-weight: 500;
    }
  }

  .button {
    background: #16a083;
    border-radius: 50px;
    padding: 0.5em 1.5em;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    border: none;
    text-transform: uppercase;
    color: #fff;
    margin-top: 1em;

    :hover {
      background: #117964;
      transition: color 1.3s ease-in-out;
    }
  }

  //Tablet
  @media screen and (max-width: 768px) {
    .form-container {
      width: 95%;

      h2 {
        font-size: 2.1rem;
        transition: 0.3s ease-in-out;
      }
    }
  }

  // Mobile
  @media screen and (max-width: 500px) {
    /* html {
      font-size: 60%;
    } */

    .form-container {
      width: 100%;
      height: auto;
      padding-top: 25px;

      h2 {
        font-size: 2rem;
      }
    }

    .form input {
      font-size: 70%;
    }

    .contact-container {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export default ContactForm;
