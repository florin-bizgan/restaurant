import styled from "styled-components";

export const AboutUs = styled.div`
  //add css here

  .about {
    background: #f5f5f7;
  }

  .about-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    padding: 50px 0;
  }

  .about-text {
    padding: 30px;
    transform: translate(-150%);
    animation: about-text-animation 1s ease-in-out forwards;

    p {
      color: #666;
    }

    p:nth-of-type(1) {
      font-weight: 600;
    }
  }

  .about-image {
    transform: translate(150%);
    animation: about-text-animation 1s ease-in-out forwards;
    img {
      height: 300px;
      max-width: 100%;
      object-fit: cover;
      object-position: right;
    }
  }

  @keyframes about-text-animation {
    100% {
      transform: translate(0);
    }
  }
  /* Tablet */
  @media screen and (max-width: 500px) {
    .about-wrapper {
      display: flex;
      flex-direction: column;
    }

    .about-text {
      font-size: 85%;
    }

    .about-image {
      width: 90%;
    }
  }

  /* Phone */
`;
