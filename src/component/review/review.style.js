import styled from "styled-components";

export const ReviewArea = styled.div`
  background: rgba(243, 243, 243);
  text-align: center;
  padding: 5rem 0;

  h1 {
    color: #444;
    font-weight: 400;
  }
`;

export const Review = styled.div`
  //css here

  .review {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .review-box {
    padding: 1rem;
    color: #444;
    :hover {
      -webkit-box-shadow: 0px 3px 22px 5px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 3px 22px 5px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 3px 22px 5px rgba(0, 0, 0, 0.75);
      cursor: pointer;
    }
  }

  .img-client {
    height: 150px;
    width: 150px;
    border-radius: 50%;

    object-fit: cover;
    object-position: center;
  }

  .img-review {
    height: 20px;
    width: auto;
  }

  .review-text,
  .review-box {
    margin: 1rem 0;
  }
  @media screen and (max-width: 600px) {
    .review {
      display: flex;
      flex-direction: column;
    }
  }
`;
