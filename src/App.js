import React from 'react';
import Home from './components/Home/Home';
import Register from './components/Register/Register';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Register />
        <Home />
      </div>
    );
  }
}

export default App;
