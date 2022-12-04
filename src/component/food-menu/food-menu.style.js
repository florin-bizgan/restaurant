import styled from "styled-components";

export const FoodMenu = styled.div`
  .food-menu-heading {
    text-align: center;
    font-size: 3rem;
    font-weight: 400;
    color: #666;
  }

  .wrap-container {
    display: grid;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-columns: repeat(2, 1fr);
    /* border: 2px solid blue; */
    padding: 50px 0px 30px 0px;
  }

  .food-container {
    display: grid;
    grid-template-columns: 1fr 3fr;
    align-items: center;
    /* border: 2px solid red; */

    /* border: 2px solid purple; */
    margin-bottom: 3rem;
    padding: 5px 0px 5px 5px;
  }

  .food-image {
    width: 150px;
    height: 150px;
    overflow: hidden;
  }

  .food-image img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .food-info {
    margin: auto 1.5rem;

    h2 {
      /* text-align: center; */
    }

    p {
      font-size: 0.8rem;
    }
  }
  .food-info p:nth-of-type(2) {
    color: #117964;
    font-weight: 700;
    font-size: 1.3rem;
  }

  /* Media */

  //Tablet
  @media (max-width: 768px) {
    .wrap-container {
      grid-template-columns: repeat(1, 1fr);
      align-items: center;
    }

    .food-container {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;
    }
  }

  //Phone
  @media (max-width: 600px) {
    .food-container,
    .food-info {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    }

    .food-info {
      h2,
      p {
        text-align: center;
      }
    }
  }
`;
