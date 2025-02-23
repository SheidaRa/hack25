import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FakeCover from "./components/FakeCover/FakeCover";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import Dashboard from "./components/Dashboard/Dashboard";
import Settings from "./components/Settings/Settings";
import Hheader from "./components/Hheader";
import Ffooter from "./components/Ffooter";
import Home from "./components/Home/Home";
import "./App.css";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./components/buttons/Login";
import Categories from "./components/Categories/Categories";
import Topic from "./components/Topic/Topic";
import ResourcesPage from "./components/resourcespage/resourcespage.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/categorie" element={<Categories />} />
          <Route path="/topic" element={<Topic />} />
          {/* <Route path="/Emergency" element={<EmergencyExit />} />
        <Route path="/Map" element={<SafeMap />} /> */}

          {/* <Hheader/>
            
              <Route exact path="/products" component={Product} />
              <Route exact path="/products/:id" component={ProductDetail} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
            
            <Ffooter/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
