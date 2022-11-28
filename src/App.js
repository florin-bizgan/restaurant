import { GlobalStyling, Button, ContactForm } from "./component";

function App() {
  return (
    <div>
      <GlobalStyling />
      {/* <Button color='mountainMeadow'>Menu</Button> */}

      <ContactForm className='form-contact' />
    </div>
  );
}

export default App;
