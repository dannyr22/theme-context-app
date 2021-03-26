import {useContext} from 'react';
import { ThemeContext } from './contexts/ThemeContext';

const Nav = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark;
  return (
    <div className="nav" style={{color: theme.color, background: theme.background}}>
      <h1>Hobbie App</h1>
    </div>
  )
}

export default Nav
