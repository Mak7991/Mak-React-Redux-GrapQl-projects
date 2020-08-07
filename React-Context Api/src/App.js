import React from 'react'
import Navbar from './components/Navbar'
import ProductList from './components/ProductList'
import ThemeContextProvider from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './context/AuthContext';
// import BookContextProvider from './context/BookContext';

function App (){
  
    return(
      <div className="App">
        <ThemeContextProvider>

        <AuthContextProvider> 
        <Navbar/>

        {/* <BookContextProvider>
         
        </BookContextProvider> */}
         <ProductList/>
        <ThemeToggle/>
        </AuthContextProvider>
         
        </ThemeContextProvider>
      </div>
    )

    }

    export default App;


