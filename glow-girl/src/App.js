import React from 'react';
import logo from './logo.svg';
import './App.css';
import Accessibility from './components/Accessibility/Accessibility';
import Categories from './components/Categories/Categories';
import CategoryPage from './components/CategoryPage/CategoryPage';

function App() {
  return (
    <div className="App">
      <Categories />
      <Accessibility />
      <CategoryPage />
    </div>
  );
}

export default App;
