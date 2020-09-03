import React, { Component } from 'react';
import './App.css';
import ClientData from './components/ClientData/ClientData'
import Navbar from  './components/Navbar/Navbar'
import Info from './components/ClientDetail/ClientDetail'
//Would use axios to get or post data from a server
//Using map() instead since json is from a local file
class App extends Component {


  render() {
    return (
      <div className="App">

        <Navbar />

        {/* Placed JSON in App.js if a more detailed application 
        required it to be stored globally */}

        {ClientData.map((item) => {
          return <div>
            <Info post={item} />
          </div>
        })}

      </div>
    );
  }
}



export default App;