import * as S from "./flex.style";

const Flex = ({ padding, children, direction, justify, align, gap, wrap }) => {
  return (
    <S.Flex
      justify={justify}
      direction={direction}
      padding={padding}
      align={align}
      gap={gap}
      wrap={wrap}
    >
      {children}
    </S.Flex>
  );
};

export default Flex;
