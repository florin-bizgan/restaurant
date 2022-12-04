import * as S from "./food-menu.style";
import Menu1 from "../images/food-menu1.webp";
import Menu2 from "../images/food-menu2.webp";
import Menu3 from "../images/food-menu3.webp";
import Menu4 from "../images/food-menu4.webp";
import Menu5 from "../images/food-menu5.webp";
import Menu6 from "../images/food-menu6.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

const FoodMenu = () => {
  return (
    <S.FoodMenu>
      <section id='menu'>
        <div className='food-menu-heading'>Food Menu</div>
        <div className='wrap-container container'>
          <div className='food-container'>
            <div className='food-image'>
              {/* <img
                src='https://i.postimg.cc/wTLMsvSQ/food-menu1.jpg'
                alt=''
                loading='lazy'
              /> */}
              <LazyLoadImage src={Menu1} alt='Image Alt' />
            </div>

            <div className='food-info'>
              <h2>Menu 1</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p>Price: £250</p>
            </div>
          </div>
          <div className='food-container'>
            <div className='food-image'>
              {/* <img
                src='https://i.postimg.cc/sgzXPzzd/food-menu2.jpg'
                alt=''
                loading='lazy'
              /> */}
              <LazyLoadImage
                src={Menu2}
                alt='Image Alt'
                width={""}
                height={""}
              />
            </div>
            <div className='food-info'>
              <h2>Menu 2</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p>Price: £250</p>
            </div>
          </div>
          <div className='food-container'>
            <div className='food-image'>
              {/* <img
                src='https://i.postimg.cc/8zbCtYkF/food-menu3.jpg'
                alt=''
                loading='lazy'
              /> */}
              <LazyLoadImage
                src={Menu3}
                alt='Image Alt'
                width={""}
                height={""}
              />
            </div>
            <div className='food-info'>
              <h2>Menu 3</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p>Price: £250</p>
            </div>
          </div>
          <div className='food-container'>
            <div className='food-image'>
              {/* <img
                src='https://i.postimg.cc/Yq98p5Z7/food-menu4.jpg'
                alt=''
                loading='lazy'
              /> */}
              <LazyLoadImage
                src={Menu4}
                alt='Image Alt'
                width={""}
                height={""}
              />
            </div>
            <div className='food-info'>
              <h2>Menu 4</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p>Price: £250</p>
            </div>
          </div>
          <div className='food-container'>
            <div className='food-image'>
              {/* <img
                src='https://i.postimg.cc/KYnDqxkP/food-menu5.jpg'
                alt=''
                loading='lazy'
              /> */}
              <LazyLoadImage
                src={Menu5}
                alt='Image Alt'
                width={""}
                height={""}
              />
            </div>
            <div className='food-info'>
              <h2>Menu 5</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p>Price: £250</p>
            </div>
          </div>
          <div className='food-container'>
            <div className='food-image'>
              {/* <img
                src='https://i.postimg.cc/Jnxc8xQt/food-menu6.jpg'
                alt=''
                loading='lazy'
              /> */}
              <LazyLoadImage
                src={Menu6}
                alt='Image Alt'
                width={""}
                height={""}
              />
            </div>
            <div className='food-info'>
              <h2>Menu 6</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p>Price: £250</p>
            </div>
          </div>
        </div>
      </section>
    </S.FoodMenu>
  );
};

export default FoodMenu;
