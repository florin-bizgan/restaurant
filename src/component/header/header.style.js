import styled from "styled-components";

export const Header = styled.div`
  //add css here
  .header {
    height: 50vh;
    background: url(https://i.postimg.cc/wT3TQS3V/header-image2.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

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
  }
`;
