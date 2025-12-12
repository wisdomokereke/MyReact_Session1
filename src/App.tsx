import WelcomeMessage from './components/WelcomeMessage.tsx';
import AboutReact from './components/AboutReact.tsx';
// import ListGroup from './components/ListGroupNull.tsx';
import ListGroup from './components/ListGroup';
import Footer from './components/Footer.tsx';

function App() {
  return(
    <>
    <WelcomeMessage />
    <AboutReact /> 
    <hr />
    <ListGroup />
    <hr />
    <Footer />
    </>
  );
}

export default App;