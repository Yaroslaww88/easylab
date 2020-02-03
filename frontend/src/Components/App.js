import React from 'react';
import LogInComponent from './LogInComponent';
import RegisterComponent from './RegisterComponent';

function App() {
  return (
    <div>
      <header>
          <RegisterComponent/>
          <LogInComponent/>
      </header>
    </div>
  );
}

export default App;
