import * as S from "./food-menu.style";

const FoodMenu = () => {
  return (
    <S.FoodMenu>
      <section id='menu'>
        <div className='food-menu-heading'>Food Menu</div>
        <div className='wrap-container container'>
          <div className='food-container'>
            <div className='food-image'>
              <img src='https://i.postimg.cc/wTLMsvSQ/food-menu1.jpg' alt='' />
            </div>
            <div className='food-info'>
              <h2>Menu 1</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p>Price: £250</p>
            </div>
          </div>
          <div className='food-container'>
            <div className='food-image'>
              <img src='https://i.postimg.cc/sgzXPzzd/food-menu2.jpg' alt='' />
            </div>
            <div className='food-info'>
              <h2>Menu 2</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p>Price: £250</p>
            </div>
          </div>
          <div className='food-container'>
            <div className='food-image'>
              <img src='https://i.postimg.cc/8zbCtYkF/food-menu3.jpg' alt='' />
            </div>
            <div className='food-info'>
              <h2>Menu 3</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p>Price: £250</p>
            </div>
          </div>
          <div className='food-container'>
            <div className='food-image'>
              <img src='https://i.postimg.cc/Yq98p5Z7/food-menu4.jpg' alt='' />
            </div>
            <div className='food-info'>
              <h2>Menu 4</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p>Price: £250</p>
            </div>
          </div>
          <div className='food-container'>
            <div className='food-image'>
              <img src='https://i.postimg.cc/KYnDqxkP/food-menu5.jpg' alt='' />
            </div>
            <div className='food-info'>
              <h2>Menu 5</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
              <p>Price: £250</p>
            </div>
          </div>
          <div className='food-container'>
            <div className='food-image'>
              <img src='https://i.postimg.cc/Jnxc8xQt/food-menu6.jpg' alt='' />
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
