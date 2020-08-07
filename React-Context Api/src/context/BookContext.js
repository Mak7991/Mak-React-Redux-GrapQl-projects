import React, {useState, createContext } from 'react'

export const BookContext = createContext();

const BookContextProvider = (props) =>{

    const [books] = useState([
        { title: 'almost home', id: 1 },
        { title: 'memory gospel', id: 2 },
        { title: 'this wild darkness', id: 3 },
        { title: 'The kite runner', id: 4 }
    ]);
    return(
        <BookContext.Provider value={{books}}>
        {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;