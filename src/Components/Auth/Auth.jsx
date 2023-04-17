import React, {useState} from 'react';
import img from "../../assets/avatar.jpg"
import './Auth.scss';
import { Link } from 'react-router-dom';

function Auth({username, password, setUsername, setPassword}) {

  return (
    <div className='login'>
      <img src={img} alt="avatar" />
      <h2>Login Page</h2>
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
        <button type="submit">Login</button>
        <Link to="/signup">

        <button className="btn">Signup</button>
        </Link>
      </form>
    </div>
  );
}

export default Auth