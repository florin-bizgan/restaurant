import * as S from "./button.style";

const Button = ({
  children,
  color,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}) => {
  return (
    <S.Button
      color={color}
      marginTop={marginTop}
      marginBottom={marginBottom}
      marginLeft={marginLeft}
      marginRight={marginRight}
    >
      {children}
    </S.Button>
  );
};

export default Button;
