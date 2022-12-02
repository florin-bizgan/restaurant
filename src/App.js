import {
  GlobalStyling,
  Button,
  ContactForm,
  Flex,
  Footer,
  Menu,
  FoodMenu,
} from "./component";

function App() {
  return (
    <div>
      <GlobalStyling />
      {/* <Menu /> */}
      <FoodMenu />
      {/* <Button color='mountainMeadow'>Menu</Button> */}
      {/* <Flex
        direction='column'
        align='center'
        justify='center'
        gap={10}
        padding={10}
      >
        <ContactForm className='form-contact' />
      </Flex> */}
      {/* <Footer>Hello</Footer> */}
    </div>
  );
}

export default App;
