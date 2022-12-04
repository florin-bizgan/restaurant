import { Button } from "../button";
import * as S from "./header.style";

const Header = () => {
  return (
    <S.Header>
      <section id='home'>
        <div className='header'>
          <h2>Eat right food</h2>
          <p>Eat Healty, it is good for your health.</p>
          <Button color='mountainMeadow' marginTop={25}>
            Menu
          </Button>
        </div>
      </section>
    </S.Header>
  );
};

export default Header;
