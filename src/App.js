import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProductJson from "./shared/products.json";
import ProductList from "./home/productList/product-List";
import { Operations } from "./redux/duck/index";
import AddressForm from "./home/address-form/address-form";
import CartPage from "./home/cart-page/cart-page";

class App extends React.Component {

  componentDidMount(){
    Operations.setAllProducts(ProductJson.products);
  }

  render() {
    return (
      <Router>
        <div className="main-Container bg-white">
          <Switch>
            <Route exact path="/product/productList" component={ProductList} />
            <Route exact path="/product/addressForm" component={AddressForm} />
            <Route exact path="/product/cartpage" component={CartPage} />
            <Route path="/">
              <Redirect to="product/productList" />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
