import {
  GlobalStyling,
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

      <ContactForm className='form-contact' />

      {/* <Footer>Hello</Footer> */}
    </div>
  );
}

export default App;
