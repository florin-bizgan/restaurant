import styled from "styled-components";

export const FoodType = styled.div`
  .food {
    padding: 5rem 0 10rem 0;
  }

  //Text Area
  .wrap-text {
    text-align: center;
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 40px;
    color: #555;
  }

  //Image Area
  .wrap-img {
    display: flex;
    justify-content: space-between;

    img {
      display: block;
      width: 100%;
      margin: auto;
      max-height: 250px;
      object-fit: cover;
      object-position: center;
    }
  }

  .img-container {
    margin: 0 1rem;
    position: relative;
  }

  .content {
    background: rgba(0, 0, 0, 0.4);
    text-align: center;
    color: white;
  }

  .img-top {
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }

  .img-bot {
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;

    a:visited,
    a:link,
    a:focus {
      text-decoration: none;
      color: white;
    }

    a:hover {
      color: #16a083;
    }
  }

  @media screen and (max-width: 600px) {
    .wrap-img {
      display: flex;
      flex-direction: column;
      gap: 15px;
      margin: auto;
    }
  }
`;
