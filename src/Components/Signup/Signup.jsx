import React, {useState} from 'react';
import img from "../../assets/avatar.jpg"
import './Signup.scss';
import { Link } from 'react-router-dom';

function Auth({username, password, setUsername, setPassword}) {

  return (
    <div className='login'>
      <img src={img} alt="avatar" />
      <h2>Signup Page</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
        <label>
          Username:
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Signup</button>
        <Link to="/login">
            <button className="btn">Login</button>
        </Link>
      </form>
    </div>
  );
}

export default Auth