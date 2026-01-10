import React from 'react';
import './App.css';
import Home from './pages/home';

function App() {
  return (
    <div>
      <Route path="/" exact component={Home} />
    </div>

  );
}

export default App;
