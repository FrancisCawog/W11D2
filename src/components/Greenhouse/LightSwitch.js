import './LightSwitch.css';
import { useTheme } from '../../context/ThemeContext';

function LightSwitch() {

  const { themeName, setThemeName } = useTheme();

  const handleClick = (e) => { 
    if (e.target.className === "on") {
      setThemeName("day")
    } else {
      setThemeName("night")
    }
  }


  return (
    <div className="light-switch day" >
      <div className="on" onClick={handleClick}>DAY</div>
      <div className="off" onClick={handleClick}>NIGHT</div>
    </div>
  );
}

export default LightSwitch;