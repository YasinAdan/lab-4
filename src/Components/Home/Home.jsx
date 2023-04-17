import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Home.scss';

export default function Home() {

  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className='home'>
      <h1>Welcome</h1>
      <p>
        This is a boiler monitoring system. Please login or signup to continue.
      </p>
      <Link to="/signup">Signup here</Link>
    </div>
  )
}


