import React, {useState, useContext} from 'react'
import './Boiler.scss'
import { Link, useOutletContext } from 'react-router-dom';

const Details = ({id, DOP, MP, MT}) => {
  return (
    <div className='details'>
      <h1>Boiler Details</h1>
      <p>Boiler Id: {id}</p>
      <p>Date of purchase: {DOP}</p>
      <p>Maximum allowable pressure: {MP}</p>
      <p>Maximum allowable temperature: {MT}</p>
    </div>
  )
}

export default function Boiler() {

  const [id, setId] = useState('123');
  const [DOP, setDOP] = useState('12/12/2020');
  const [MP, setMP] = useState('1000');
  const [MT, setMT] = useState('1500');

  // hide or view
  const [show, setShow] = useState(false);


  return (

    <div className='container'>
    <form className="boiler-form" onSubmit={(e) => {
      e.preventDefault();
      console.log(id, DOP, MP, MT)
    }}>
    <div className="container">
      <h1>Change Boiler Details</h1>
      <p>Please fill in the details of boiler in the form below.</p>
      <hr />

      <label htmlFor="boiler_id"><b>Boiler Id</b></label
      ><br />
      <input
        type="text"
        placeholder="Enter Boiler Id"
        name="uname"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
        />
      <br />

      <label htmlFor="date"><b>Date of purchase</b></label
      ><br />
      <input
        type="text"
        placeholder="Enter Date of purchase"
        name="uname"
        value={DOP}
        onChange={(e) => setDOP(e.target.value)}
        
        required
        />
      <br />

      <label htmlFor="pressure"><b>Maximum allowable pressure</b></label
      ><br />
      <input
        type="text"
        placeholder="Enter Maximum allowable pressure"
        name="uname"
        value={MP}
        onChange={(e) => setMP(e.target.value)}
        
        required
        />
      <br />

      <label htmlFor="temperature"><b>Maximum allowable temperature</b></label
      ><br />
      <input
        type="text"
        placeholder="Enter Maximum allowable temperature"
        name="uname"
        value={MT}
        onChange={(e) => setMT(e.target.value)}
        required
        />
      <br />
      <button type="submit" className="submitbtn">Change Details</button>
    </div>
  </form>

  <button className='b-btn' onClick={() => setShow(!show)}>{
    show ? 'Hide Details' : 'View Details'
  }</button>

  <div className='pop-up'>
    {show && <Details id={id} DOP={DOP} MP={MP} MT={MT} />}
  </div>
  </div>
  )
}
