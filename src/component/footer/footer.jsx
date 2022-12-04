import * as S from "./footer.style";
import { Flex } from "../flex";

const Footer = ({ color, children }) => {
  return (
    <S.Footer color={color}>
      <Flex direction='column' align='center' gap={10}>
        {children}
      </Flex>
    </S.Footer>
  );
};

export default Footer;
