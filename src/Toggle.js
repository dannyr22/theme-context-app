import {useContext} from 'react';
import { ThemeContext } from './contexts/ThemeContext';

const Toggle = () => {
  const { isLightTheme, setIsLightTheme } = useContext(ThemeContext)
  return (
    <div className="toggle">
      <button onClick={() => setIsLightTheme(!isLightTheme)}>Toggle ME</button>
    </div>
  )
}

export default Toggle
