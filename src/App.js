import {
  GlobalStyling,
  Button,
  ContactForm,
  Footer,
  Menu,
  FoodMenu,
  Header,
} from "./component";

function App() {
  return (
    <div>
      <GlobalStyling />
      <Menu />
      <Header />
      <FoodMenu />
      {/* <Button color='mountainMeadow'>Menu</Button> */}

      <ContactForm className='form-contact' />

      {/* <Footer>Hello</Footer> */}
    </div>
  );
}

export default App;
