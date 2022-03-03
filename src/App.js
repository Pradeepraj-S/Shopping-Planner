import './App.css';
import { BrowserRouter as Router,Route, Switch, Link, NavLink  } from 'react-router-dom';
import Home from "./Components/Home";
import Navbar from './Components/Navbar';
import Product from './Components/Product';
import Cart from './Components/Cart';
import Check from './Components/Check';


import "bootstrap/dist/css/bootstrap.min.css";
import New from './Components/New';

function App() {
  return (
    <Router>
    
    <div className="App">
   <Navbar />
      <Switch>
      
        <Route exact path="/" component={Home}>
          <Home />
        </Route> 
        
        <Route exact path="/Cart" component={Cart}>
          <Cart />
        </Route> 
        
        <Route exact path="/Check" component={Check}>
          <Check />
        </Route> 
        <Route exact path="/New" component={New}>
          <New />
        </Route> 
        
        
        <Route exact path="/Product" component={Product}>
          <Product />
        </Route> 

        

        
      </Switch>
      
      
    </div>
  </Router>
    
  );
}

export default App;
