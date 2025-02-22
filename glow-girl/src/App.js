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
