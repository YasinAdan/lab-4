
import React, { useState, useContext } from 'react';
import { TPListContext } from '../../App';
import './TP.scss';



function TP() {
  const [temperature, setTemperature] = useState('');
  const [pressure, setPressure] = useState('');
  const [tpList, setTpList] = useContext(TPListContext);


  const handleSubmit = (event) => {
    event.preventDefault();
    const newTp = { temperature, pressure };
    setTpList([...tpList, newTp]);
    setTemperature('');
    setPressure('');
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h2>Temperature-Pressure Data</h2>
        <label>
          Temperature:
          <input
            type="text"
            value={temperature}
            onChange={(event) => setTemperature(event.target.value)}
          />
        </label>
        <br />
        <label>
          Pressure:
          <input
            type="text"
            value={pressure}
            onChange={(event) => setPressure(event.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      <h2>Entered Data</h2>
      <ol>
        {tpList.map((tp, index) => (
          <li key={index} >
              <span className='item'>
                Temperature: {tp.temperature} : Pressure: {tp.pressure}
              </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default TP;
