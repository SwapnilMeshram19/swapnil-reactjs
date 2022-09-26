import React from 'react';
import './App.css';
import {useFetchProductQuery,useFetchProductsQuery} from './features/product/productApiSlice';
import { Pages } from './pages/Pages';
function App() {

  return (
    <div className="App">
      <Pages/>
    </div>
  );
}

export default App;
