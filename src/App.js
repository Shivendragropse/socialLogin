import React from 'react';
import './App.css';
import Facebook from './components/Facebook';
import Google from './components/Google';
// import Linkdin from './components/Linkdin'
// import Twitter from './components/Twitter'
import Instagram from './components/Instagram'
// import Github from './components/Github'

function App() {
  return (
    <div className="App">
        <h1 className="App-title">Facebook Auth Example</h1>
        <p className="App-intro"> To get started , Authenticate with facebook </p>
        <Facebook />
        <br/>
        <Google />
        <br/>
        <Instagram />
        {/* <Github /> */}
    </div>
  );
}

export default App;
