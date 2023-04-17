import { useContext } from 'react';
import { TPListContext } from '../../App';
import './Graph.scss';

import { useState, useEffect, useRef } from 'react';

const Graph = () => {
  const [tpList, setTpList] = useContext(TPListContext);
  const canvasRef = useRef(null);
  const [canvasWidth, setCanvasWidth] = useState(800);
  const [canvasHeight, setCanvasHeight] = useState(400);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');

      // Calculate the scale factor to fit the data within the canvas
      const maxPressure = Math.max(...tpList.map((tp) => tp.pressure));
      const maxTemperature = Math.max(...tpList.map((tp) => tp.temperature));
      const maxData = Math.max(maxPressure, maxTemperature);
      const scaleFactor = canvasHeight / maxData;

      // Draw the x-axis
      ctx.beginPath();
      ctx.moveTo(0, canvasHeight);
      ctx.lineTo(canvasWidth, canvasHeight);
      ctx.stroke();

      // Draw the y-axis
      ctx.beginPath();
      ctx.moveTo(0, canvasHeight);
      ctx.lineTo(0, 0);
      ctx.stroke();

      // Draw the pressure line
      ctx.beginPath();
      ctx.strokeStyle = '#ff7300';
      ctx.moveTo(0, canvasHeight - tpList[0].pressure * scaleFactor);
      tpList.forEach((tp, index) => {
        const x = (index * canvasWidth) / (tpList.length - 1);
        const y = canvasHeight - tp.pressure * scaleFactor;
        ctx.lineTo(x, y);
      });
      ctx.stroke();

      // Draw the temperature line
      ctx.beginPath();
      ctx.strokeStyle = '#387908';
      ctx.moveTo(0, canvasHeight - tpList[0].temperature * scaleFactor);
      tpList.forEach((tp, index) => {
        const x = (index * canvasWidth) / (tpList.length - 1);
        const y = canvasHeight - tp.temperature * scaleFactor;
        ctx.lineTo(x, y);
      });
      ctx.stroke();

      // Add labels for pressure and temperature
      ctx.fillStyle = '#000';
      ctx.font = '14px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText('Pressure', 10, 20);
      ctx.fillText('Temperature', 10, 40);
    }
  }, [tpList, canvasWidth, canvasHeight]);

  return (
    <div className='graph'>
      <h1>Temperature & Pressure Graph</h1>
      <canvas ref={canvasRef} width={canvasWidth} height={canvasHeight} />
    </div>
  );
};

export default Graph;
