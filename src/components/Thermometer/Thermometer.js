import ReactSlider from "react-slider";
import './Thermometer.css';
import { useClimate } from "../../context/ClimateContext";
import {useState, useEffect } from "react"

function Thermometer() {
  const {temperature, setTemp} = useClimate();
  const [desiredTemp, setDesiredTemp] = useState(50);

  useEffect(() => {
    const interval = setInterval(function(){
      if (temperature > desiredTemp){
        setTemp(temperature - 1)
      } else if (temperature === desiredTemp) {
          clearInterval(interval);
        } else {
          setTemp(temperature + 1)
        }
      } ,1000)
      
      return () => {
        clearInterval(interval);
      }
    }, [temperature, desiredTemp])

  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={desiredTemp}
        onAfterChange={(val) => {setDesiredTemp(val)}}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Thermometer;