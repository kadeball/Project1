import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import WrapContent from "./components/WrapContent";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Clickfunko from "./components/Clickfunko";


function App() {

    const [category, setCategory] = React.useState('all');


    function handleClick( category ) {
        setCategory(category);

    }

  return (

          <div className="App">
              <Router>
                  <Navbar clickHandler={handleClick}/>
                  <WrapContent category={category}/>
                  <Switch>
              <Route exact path="/" component={WrapContent}/>
              <Route path="/:name" component={Clickfunko}/>
              </Switch>
              </Router>
          </div>



  );
}

export default App;