import * as S from "./review.style";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Review = () => {
  return (
    <S.Review>
      <section id='reviews'>
        <S.ReviewArea>
          <div className='title container'>
            <h1>What Our Customers Say</h1>
            <div className='review'>
              <div className='review-box'>
                <LazyLoadImage
                  src={`${process.env.PUBLIC_URL}/assets/img/male-photo1.webp`}
                  width='200'
                  height='200'
                  alt='Image Alt'
                  className='img-client'
                />
                <h3>Max</h3>
                <div className='star'>
                  <img
                    className='img-review'
                    src={`${process.env.PUBLIC_URL}/assets/img/star.png`}
                    alt='logo'
                    loading='lazy'
                  />
                  <p className='review-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam, sequi tempora tenetur velit ratione placeat nulla,
                    dolor, quam corrupti quaerat voluptas. Minima quidem magnam
                    voluptatem ab ex porro reiciendis beatae!
                  </p>
                </div>
              </div>
              <div className='review-box'>
                <LazyLoadImage
                  src={`${process.env.PUBLIC_URL}/assets/img/female-photo1.webp`}
                  width='200'
                  height='200'
                  alt='Image Alt'
                  className='img-client'
                />
                <h3>Jane</h3>
                <div className='star'>
                  <img
                    className='img-review'
                    src={`${process.env.PUBLIC_URL}/assets/img/star.png`}
                    alt='logo'
                    loading='lazy'
                  />
                  <p className='review-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam, sequi tempora tenetur velit ratione placeat nulla,
                    dolor, quam corrupti quaerat voluptas. Minima quidem magnam
                    voluptatem ab ex porro reiciendis beatae!
                  </p>
                </div>
              </div>
              <div className='review-box'>
                <LazyLoadImage
                  src={`${process.env.PUBLIC_URL}/assets/img/male-photo3.webp`}
                  width='200'
                  height='200'
                  alt='Image Alt'
                  className='img-client'
                />
                <h3>Robert</h3>
                <div className='star'>
                  <img
                    className='img-review'
                    src={`${process.env.PUBLIC_URL}/assets/img/star.png`}
                    alt='logo'
                    loading='lazy'
                  />
                  <p className='review-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam, sequi tempora tenetur velit ratione placeat nulla,
                    dolor, quam corrupti quaerat voluptas. Minima quidem magnam
                    voluptatem ab ex porro reiciendis beatae!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </S.ReviewArea>
      </section>
    </S.Review>
  );
};

export default Review;
