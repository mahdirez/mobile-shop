import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Header,
  Footer,
} from "./components";
import { Provider } from "./components/context/Context";
import Cart from "./components/pages/cart/Cart";
import InfoCard from "./components/pages/infoCard/InfoCard";
import Products from "./components/pages/products/Products";

import Router from "./Router";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <main>
          <header className="header-bg">
            <Navbar />
            <Header />
          </header>
        </main>
        <Routes>
          <Route path="/" element={<Router />} />
          <Route path="/product/:id" element={<InfoCard />} />
          <Route path="/product" element={<Products/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
        <footer>
          <Footer/>
        </footer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
