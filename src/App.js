import {
  GlobalStyling,
  ContactForm,
  Footer,
  Menu,
  FoodMenu,
  Header,
  AboutUs,
  FoodType,
  Flex,
} from "./component";

function App() {
  return (
    <div>
      <GlobalStyling />
      <Menu />
      <Header />
      <AboutUs />
      <FoodType />
      <FoodMenu />
      <ContactForm />
      <Footer>
        <p>Ristorante "La Mitica". © All rights reserved 2022</p>
        <div className='social'>
          {/* <img
            className='img-foot'
            src={`${process.env.PUBLIC_URL}/assets/my-logo-2.png`}
            alt='logo'
          /> */}
        </div>
      </Footer>
    </div>
  );
}

export default App;
