import styled from "styled-components";

export const Header = styled.div`
  //add css here
  .header {
    height: 50vh;
    background-image: url("https://i.postimg.cc/wT3TQS3V/header-image2.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    button {
      cursor: pointer;
    }

    /* background: linear-gradient(
        rgba(240, 240, 240, 0.144),
        rgba(255, 255, 255, 0.336)
      ),
      url("https://i.postimg.cc/wT3TQS3V/header-image2.jpg"); */

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    h2 {
      margin-top: 1.5em;
      font-weight: 800;
      text-transform: uppercase;
    }

    p {
      font-size: 1.2rem;
      font-weight: 400;
      text-decoration: underline;

      :hover {
        /* font-size: 1.3rem; */
        font-weight: 800;
      }
    }
  }
`;
