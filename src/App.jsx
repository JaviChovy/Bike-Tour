import './App.css';
import NavBar from './Component/NavBar/NavBar';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import ItemListContainer from './Component/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Component/ItemDetailContainer'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Cart from './Component/Cart';
import { CartProvider } from './Component/context/CartContext';



function App() {
  return (
    <CartProvider>
          <BrowserRouter>
            <NavBar />
                      <Switch>
                          <Route exact path="/" component={ItemListContainer}></Route>
                          <Route exact path="/Categoria/:id" component={ItemListContainer}></Route>
                          <Route path="/item/:id" component={ItemDetailContainer}/>
                          <Route exact path="/Cart" component={Cart}></Route>                          
                      </Switch>
          
          </BrowserRouter>
        </CartProvider>
  );
}

export default App;