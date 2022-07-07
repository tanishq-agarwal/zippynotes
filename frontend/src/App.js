import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import { BrowserRouter, Route } from "react-router-dom";
import MyNotes from './screens/MyNotes/MyNotes';
import { Switch } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/mynotes' component={MyNotes} />
      </Switch>
    </main>
    <Footer />
  </BrowserRouter>
);


export default App;
