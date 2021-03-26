import {useContext} from 'react';
import { ThemeContext } from './contexts/ThemeContext';

const HobbieList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark;
  return (
    <div className="hobbies" style={{color: theme.color, background: theme.background}}>
      <ul>
        <li><p style={{background: theme.ui}}>Learn to code like a master</p></li>
        <li><p style={{background: theme.ui}}>Get the guitar out</p></li>
        <li><p style={{background: theme.ui}}>Binge watch 4th season of Ozark</p></li>
        <li><p style={{background: theme.ui}}>Start jogging</p></li>
      </ul>
    </div>
  )
}

export default HobbieList
