import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";

import { commerce } from "./lib/commerce";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' render={() => <Home products={products} />} />
        <Route exact path='/products' render={() => <Products products={products} />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;