import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FakeCover from './components/FakeCover/FakeCover';
import CategoryPage from './components/CategoryPage/CategoryPage';
import Dashboard from './components/Dashboard/Dashboard';
import Settings from './components/Settings/Settings';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>

      <Route path="/*" element={<Home />} />       
     
        {/* <Route path="/Emergency" element={<EmergencyExit />} />
        <Route path="/Map" element={<SafeMap />} /> */}

      </Routes>
    </Router>
    </div>
  );
}


export default App;






// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer'
// import Home from './components/Home'
// import About from './components/About'
// import Product from './components/Product'
// import Contact from './components/Contact'
// import { Redirect, Route, Switch } from 'react-router-dom';
// import ProductDetail from './components/ProductDetail';
// import Cart from './components/Cart';
// import Checkout from './components/Checkout'

// function App() {
//   return (
//     <>
//       <Header/>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/products" component={Product} />
//         <Route exact path="/products/:id" component={ProductDetail} />
//         <Route exact path="/cart" component={Cart} />
//         <Route exact path="/checkout" component={Checkout} />
//         <Route exact path="/about" component={About} />
//         <Route exact path="/contact" component={Contact} />
//         <Redirect to="/" />
//       </Switch>
//       <Footer/>
//     </>
//   );
// }

// export default App;