import { useEffect } from 'react';
import { connect } from 'react-redux'
import { fetchItem } from './redux/action/item';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Main from './Component/main/Main';
import OrderSummary from './Component/orderSummary/OrderSummary';

function App({ fetchItem }) {
  useEffect(()=>{
    fetchItem()
  },[fetchItem])
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path="/cart-item" component={OrderSummary} />
        </Switch>
      </Router>
    </>
  );
}

export default connect(null,{ fetchItem })(App);
