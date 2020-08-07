import React, { useContext } from 'react'
import {ThemeContext} from '../context/ThemeContext'
import {AuthContext} from '../context/AuthContext';

// class Navbar extends Component{

// // ----------------Changing the theme using context consumer Also it can be used in stateless component--------------------

// // function Navbar() {
// //     return(
// //                 <ThemeContext.Consumer>{(context) => {
        
// //                     const { isLightTheme, light, dark} = context;
// //                     const theme = isLightTheme ? light : dark;
// //                 return(
// //                 <nav style={{background: theme.ui, color: theme.syntax}}>
// //                   <h1>React Hooks</h1>
// //                         <ul>
// //                             <li>Home</li>
// //                             <li>About</li>
// //                             <li>Contact</li>
// //                         </ul>
                
// //                 </nav>
// //                 )
              
// //              }}</ThemeContext.Consumer>
// //             )
// //          }

        

// // -------------------------------------------------------------------------------------------------------------------------


// // ----------------Changing the theme using context type --------------------

// // class Navbar extends Component{

// // static contextType = ThemeContext;

// // render(){

// //     const { isLightTheme, light, dark} = this.context;
// //     const theme = isLightTheme ? light : dark;

// //     return(
// //         <nav style={{background: theme.ui, color: theme.syntax}}>
// //         <h1>React Hooks</h1>
// //             <ul>
// //                 <li>Home</li>
// //                 <li>About</li>
// //                 <li>Contact</li>
// //             </ul>
// //         </nav>
// //     )
// // }
// // }
//     render(){
//             return(
//                 <AuthContext.Consumer>{(authContext) =>(
//                 <ThemeContext.Consumer>{(themeContext) => {

//                     const {isAuthenticated, toggleAuth} = authContext;
//                     const { isLightTheme, light, dark} = themeContext;
//                     const theme = isLightTheme ? light : dark;
//              return(
//                     <nav style={{background: theme.ui, color: theme.syntax}}>
//                     <h1>React Hooks</h1>
//                         <button onClick={toggleAuth} className="toggle-btn">
//                             {isAuthenticated ? "Logged In" : "Logged Out"}
//                         </button>
//                         <ul>
//                             <li>Home</li>
//                             <li>About</li>
//                             <li>Contact</li>
//                         </ul>
//                     </nav>
//                 )
            
//             }}</ThemeContext.Consumer>
            
//             )}</AuthContext.Consumer>
                
//           )
          
//         }
//      }    

     const Navbar = () => {
        const {isAuthenticated, toggleAuth} = useContext(AuthContext);
        const { isLightTheme, light, dark} = useContext(ThemeContext);
        const theme = isLightTheme ? light : dark;
        return(
            <nav style={{background: theme.ui, color: theme.syntax}}>
                  
            <h1>React Hooks</h1>
                <button onClick={toggleAuth} className="toggle-btn">
                    {isAuthenticated ? 'Logged In' : 'Logged Out'}
                </button>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        )
     }
     
     
    export default Navbar;
