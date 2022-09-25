import React from 'react';
import './App.css';
import {useFetchProductQuery,useFetchProductsQuery} from './features/product/productApiSlice';
function App() {

  const {data=[],isLoading}=useFetchProductsQuery();
  console.log(data,isLoading)
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
