import React, {useContext } from 'react'
import {ThemeContext} from '../context/ThemeContext'

// class ThemeToggle extends Component{
//     static contextType = ThemeContext;
// render(){
//     const {changeTheme}= this.context

//     return(
     
//         <button onClick={changeTheme} className="toggle-btn"> Toggle the theme </button>
//         )
//     }
// }
const ThemeToggle = () => {

    const{changeTheme}=useContext(ThemeContext);

    return(
     
        <button onClick={changeTheme} className="toggle-btn"> Toggle the theme </button>
        )
}
    export default ThemeToggle ;
