// // import React from 'react';
// // import './App.css';
// import FakeCover from './components/FakeCover/FakeCover';
// import Categories from './components/Categories/Categories';
// import CategoryPage from './components/CategoryPage/CategoryPage';
// import Dashboard from './components/Dashboard/Dashboard';
// // import {
// //   HashRouter as Router,
// //   Route,
// //   Routes,
// // } from 'react-router-dom';
// // import Settings from './components/Settings/Settings';

// // function App() {
// //   return (
// //     <div className="App">
// //       <Router>
// //         <Routes>

// //           <Route exact path="/" element={<Categories />} />

// //           {/* <FakeCover /> */}
// //           {/* TODO move Categories and FakeCover into Home component */}
          
// //           <Route path="/category" element={<CategoryPage />} />

// //           <Route path="/topic" element={<Dashboard />} />

// //           <Route path="/settings" element={<Settings />} />
// //         </Routes>
// //       </Router>
// //     </div>
// //   );
// // }

// // export default App;



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FakeCover from './components/FakeCover/FakeCover';
import CategoryPage from './components/CategoryPage/CategoryPage';
import Dashboard from './components/Dashboard/Dashboard';
import Settings from './components/Settings/Settings';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/FakeCover" element={<FakeCover />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        {/* <Route path="/Emergency" element={<EmergencyExit />} />
        <Route path="/Map" element={<SafeMap />} /> */}

      </Routes>
    </Router>
    </div>
  );
}


export default App;
