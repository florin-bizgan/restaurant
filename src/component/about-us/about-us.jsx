import { Flex } from "../flex";
import * as S from "./about-us.style";

const AboutUs = () => {
  return (
    <S.AboutUs>
      <section id='about'>
        <div className='about'>
          <div className='about-wrapper container'>
            <div className='about-text'>
              <p>About Us</p>
              <h2>We've been making healty food for the last 10 years</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                recusandae animi doloremque commodi. Suscipit, harum veritatis
                excepturi assumenda voluptatem alias necessitatibus facere,
                consequatur rem soluta repellendus incidunt officia ipsam
                deleniti.
              </p>
            </div>
            <div className='about-image'>
              <img
                src='https://i.postimg.cc/mgpwzmx9/about-photo.jpg'
                alt=''
                loading='lazy'
              />
            </div>
          </div>
        </div>
      </section>
    </S.AboutUs>
  );
};

export default AboutUs;
