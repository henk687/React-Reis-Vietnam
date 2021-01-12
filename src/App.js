import React, {useState} from 'react'
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import GlobalStyle from './GlobalStyle';
import { Switch, Route } from 'react-router-dom'
import Home from './pages/index';
import Bestemmingen from './pages/Bestemmingen';
import Afbeeldingen from './pages/Afbeeldingen';
import Contact from './pages/Contact';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
    <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Bestemmingen' component={Bestemmingen} />
        <Route path='/Afbeeldingen' component={Afbeeldingen} />
        <Route path='/Contact' component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
