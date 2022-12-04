import * as S from "./review.style";

const Review = () => {
  return (
    <S.Review>
      <section id='reviews'>
        <div className='reviews-area'>
          <div className='title container'>
            <h1>What Our Customers Say</h1>
            <div className='review'>
              <div className='review-box'>
                <img
                  className='img-client'
                  src={`${process.env.PUBLIC_URL}/assets/img/male-photo1.jpg`}
                  alt='logo'
                />
                <h3>Max</h3>
                <div className='star'>
                  <img
                    className='img-review'
                    src={`${process.env.PUBLIC_URL}/assets/img/star.png`}
                    alt='logo'
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
                <img
                  className='img-client'
                  src={`${process.env.PUBLIC_URL}/assets/img/female-photo1.jpg`}
                  alt='logo'
                />
                <h3>Jane</h3>
                <div className='star'>
                  <img
                    className='img-review'
                    src={`${process.env.PUBLIC_URL}/assets/img/star.png`}
                    alt='logo'
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
                <img
                  className='img-client'
                  src={`${process.env.PUBLIC_URL}/assets/img/male-photo3.jpg`}
                  alt='logo'
                />
                <h3>Robert</h3>
                <div className='star'>
                  <img
                    className='img-review'
                    src={`${process.env.PUBLIC_URL}/assets/img/star.png`}
                    alt='logo'
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
        </div>
      </section>
    </S.Review>
  );
};

export default Review;
