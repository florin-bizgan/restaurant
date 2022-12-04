import styled from "styled-components";

const colorMap = {
  mountainMeadow: "#16a083", // normal green text
  genoa: "#117964",
  lavenderMagenta: "#ED61D2",
  cornflowerBlue: "#6179ED",
  fruitSalad: "#4AA14C",
};

export const Button = styled.button`
  background-color: ${({ color }) => colorMap[color]};
  border-radius: 2rem;
  color: white;
  padding: 0.5em 1.5em;
  font-size: 1.6rem;
  text-transform: uppercase;
  border: none;
  margin-top: ${({ marginTop }) => `${marginTop}px`};
  margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
  margin-left: ${({ marginLeft }) => `${marginLeft}px`};
  margin-right: ${({ marginRight }) => `${marginRight}px`};

  :hover {
    background: #117964;
    transition: color 0.3 ease-in-out;
  }
`;
