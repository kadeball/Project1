import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Wrapper from "./components/Wrapper";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Clickfunko from "./components/Clickfunko";


function App() {

    const [category, setCategory] = React.useState('all');


    function handleClick( category ) {
        setCategory(category);

    }

  return (
      <Router>

          <div className="App">
              <Nav clickHandler={handleClick}/>
              <Wrapper category={category}/>
              <Switch>
              <Route exact path="/" component={Wrapper}/>
              <Route path="/:name" component={Clickfunko}/>
              </Switch>
          </div>
      </Router>



  );
}

export default App;