import React, {useContext, useState } from 'react'
import uuid from 'uuid/v1';
import {ThemeContext} from '../context/ThemeContext'
// import { BookContext } from '../context/BookContext';
import AddNewBook from './AddNewBook';

// class ProductList extends Component{
//     static contextType = ThemeContext;
// render(){
//     console.log(this.context);
//       const {isLightTheme, light, dark} = this.context;
//       const theme = isLightTheme ? light : dark;

//         return(
//         <div className="product-list" style={{background: theme.bg, color: theme.syntax}}>
//             <ul>
//                 <li style={{background: theme.ui}}>Book</li>
//                 <li style={{background: theme.ui}}>Ball</li>
//                 <li style={{background: theme.ui}}s>Bat</li>
//             </ul>
            
//         </div>
//         )

//     }
// }

const ProductList = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const [books, setBooks] = useState([
      { title: 'almost home', id: 1 },
      { title: 'memory gospel', id: 2 },
      { title: 'this wild darkness', id: 3 }
    ]);
    const theme = isLightTheme ? light : dark;

    // const [age, setAge] = useState(20);
      const addBook = (title) => {
        setBooks([...books, { title: title, id: uuid() }]);
      };


    return(
        <div className="product-list" style={{background: theme.bg, color: theme.syntax}}>
        <ul>    
             {books.map(book => {
              return ( 
                   <li key={book.id} style={{background: theme.ui}}>{book.title} </li> 
                   );

            })}
        </ul>
        <AddNewBook addBook={addBook} />
    </div>
    )
}

    export default ProductList ;
