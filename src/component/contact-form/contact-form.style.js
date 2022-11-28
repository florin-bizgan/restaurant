import styled from "styled-components";

export const ContactForm = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

  border-radius: 0.2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 25%; // TO BE ADJUSTED AS REQUIRED
  border: 1px solid grey;
  /* margin: auto; */

  h1 {
    font-size: 2.7rem;
    font-weight: 500;
    color: #444;
  }

  input,
  textarea {
    border-bottom: 2px solid #ddd;
    outline: none;
    margin: 0px 0px 16px;
    padding: 16px 0px;
  }

  .submit {
    background-color: #16a083;
    border-radius: 1rem;
    color: white;
    padding: 0.5em 1.5em;
    width: 85px;
    border: none;
    text-transform: uppercase;

    :hover {
      background: #117964;
      transition: color 0.3 ease-in-out;
    }
  }
`;

export default ContactForm;
