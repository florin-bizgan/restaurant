import * as S from "./food-type.style";
import Food1 from "../images/food1.jpg";
import Food2 from "../images/food2.jpg";
import Food3 from "../images/food3.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FoodType = () => {
  return (
    <S.FoodType>
      <section id='type'>
        <div className='food'>
          <div className='wrap-text'>
            <h1>Types of Food</h1>
          </div>
          <div className='wrap-img container'>
            <div className='img-container'>
              <div className='img-top content'>
                <h3>Fruits</h3>
              </div>
              {/* <img
                className='img'
                src={`${process.env.PUBLIC_URL}/assets/img/food1.jpg`}
                alt='logo'
                loading='lazy'
              /> */}

              <LazyLoadImage src={Food1} alt='Image Alt' className='img' />
              <div className='img-bot content'>
                <a href='https://en.wikipedia.org/wiki/Fruit' target='blank'>
                  Read more
                </a>
              </div>
            </div>
            <div className='img-container'>
              <div className='img-top content'>
                <h3>Vegetables</h3>
              </div>
              {/* <img
                className='img'
                src={`${process.env.PUBLIC_URL}/assets/img/food2.jpg`}
                alt='logo'
                loading='lazy'
              /> */}

              <LazyLoadImage src={Food2} alt='Image Alt' className='img' />
              <div className='img-bot content'>
                <a
                  href='https://en.wikipedia.org/wiki/Vegetable'
                  target='blank'
                >
                  Read more
                </a>
              </div>
            </div>
            <div className='img-container'>
              <div className='img-top content'>
                <h3>Grains</h3>
              </div>
              {/* <img
                className='img'
                src={`${process.env.PUBLIC_URL}/assets/img/food3.jpg`}
                alt='logo'
                loading='lazy'
              /> */}

              <LazyLoadImage src={Food3} alt='Image Alt' className='img' />
              <div className='img-bot content'>
                <a href='https://en.wikipedia.org/wiki/Grain' target='blank'>
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </S.FoodType>
  );
};

export default FoodType;
