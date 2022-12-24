import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Header,
  Footer,
} from "./components";
import { Provider } from "./components/context/Context";
import InfoCard from "./components/infoCard/InfoCard";
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
        </Routes>
        <footer>
          <Footer/>
        </footer>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
