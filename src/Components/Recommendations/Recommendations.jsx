import React, { useContext } from 'react';
import { TPListContext } from '../../App';
import './Recommendations.scss';

const Recommendations = () => {
  const [tpList, setTpList] = useContext(TPListContext);

  const currentTemperature = tpList[tpList.length - 1]?.temperature;
  const currentPressure = tpList[tpList.length - 1]?.pressure;

  let temperatureRecommendation = '';
  let pressureRecommendation = '';

  if (currentTemperature >= 80) {
    temperatureRecommendation = 'The temperature is too high. Turn off the boiler and allow it to cool down before proceeding.';
  } else if (currentTemperature <= 60) {
    temperatureRecommendation = 'The temperature is too low. Check the thermostat and ensure it is set correctly.';
  }

  if (currentPressure >= 2.5) {
    pressureRecommendation = 'The pressure is too high. Release some water from the pressure relief valve until the pressure drops to the recommended level.';
  } else if (currentPressure <= 1.5) {
    pressureRecommendation = 'The pressure is too low. Check the water level in the boiler and fill it up if necessary.';
  }

  return (
    <div className='container'>
      <h1>Boiler Recommendations</h1>
      <p>{temperatureRecommendation}</p>
      <p>{pressureRecommendation}</p>
    </div>
  );
};

export default Recommendations;
