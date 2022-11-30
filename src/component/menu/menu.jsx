import * as S from "./menu.style";

const Menu = () => {
  return (
    <S.Menu>
      {/* <div className='navbar'>
        <div className='navbar-container container'>
          <div className='hamburger'>
            <span className='line line1'></span>
            <span className='line line2'></span>
            <span className='line line3'></span>
          </div>
          <ul className='menu-items'>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#category'>Category</a>
            </li>
            <li>
              <a href='#menu'>Menu</a>
            </li>
            <li>
              <a href='#testimonial'>Testimonial</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
          <div className='logo'>RS</div>
        </div>
      </div> */}

      <nav className='navbar'>
        <div className='navbar-container container'>
          <input type='checkbox' name='' id='' />
          <div className='hamburger-lines'>
            <span className='line line1'></span>
            <span className='line line2'></span>
            <span className='line line3'></span>
          </div>
          <ul className='menu-items'>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#food'>Category</a>
            </li>
            <li>
              <a href='#food-menu'>Menu</a>
            </li>
            <li>
              <a href='#testimonials'>Testimonial</a>
            </li>
            <li>
              <a href='#contact'>Contact</a>
            </li>
          </ul>
          <h1 className='logo'>RS</h1>
        </div>
      </nav>
    </S.Menu>
  );
};

export default Menu;
