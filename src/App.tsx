import React from 'react';
import './App.css';
import Form from './Components/form';
import Button from './Components/Button';

function App() {
  return (
    <div className="app">
      <div>
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
      </div>
      <div>
        <Button boldText="Try it free 7 days" text="&nbsp;then $20/mo. thereafter" color="blue" type="button"/>
        <Form />
      </div>
    </div>
  );
}

export default App;
