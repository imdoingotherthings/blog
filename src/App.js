import React from 'react';
import Signin from './components/Signin/Signin';
import Home from './components/Home/Home';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Signin />
        <Home />
      </div>
    );
  }
}

export default App;
