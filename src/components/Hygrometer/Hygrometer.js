import ReactSlider from "react-slider";
import "./Hygrometer.css";
import { useClimate } from "../../context/ClimateContext";
import {useState, useEffect } from "react"

function Hygrometer() {
  const {humidity, setHumidity} = useClimate();
  const [desiredHumidity, setDesiredHumidity] = useState(40);

  useEffect(() => {
    const interval = setInterval(function(){
      if (humidity > desiredHumidity){
        setHumidity(humidity - 2)
      } else if (humidity === desiredHumidity) {
          clearInterval(interval);
        } else {
          setHumidity(humidity + 2)
        }
      } ,1000)
      
      return () => {
        clearInterval(interval);
      }
    }, [humidity, desiredHumidity])

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={desiredHumidity}
        onAfterChange={(val) => {setDesiredHumidity(val)}}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
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

export default Hygrometer;