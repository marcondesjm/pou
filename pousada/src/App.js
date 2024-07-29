import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Accommodations from './components/Accommodations';
import Contact from './components/Contact';
import Politica from './components/Politica';
import Beaches from './components/Beaches';
import Breakfast from './components/Breakfast';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import GlobalStyle from './GlobalStyle';
import Pinheira from './components/Pinheira';
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/accommodations" component={Accommodations} />
        <Route path="/contact" component={Contact} />
        <Route path="/beaches" component={Beaches} />
        <Route path="/breakfast" component={Breakfast} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/pinheira" component={Pinheira} />
        <Route path="/politica" component={Politica} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
