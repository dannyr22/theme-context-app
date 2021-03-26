import { createContext, useState } from 'react';

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {
  const { isLightTheme, setIsLightTheme } = useState(true);
  const light = {
    color: 'black',
    background: 'white'
  }
  const dark = {
    color: 'white',
    background: 'black'
  }
  return (
    <ThemeContext.Provider value={{isLightTheme, setIsLightTheme, light, dark}}>
      {children}
    </ThemeContext.Provider>
    
  )
}
export default ThemeContextProvider