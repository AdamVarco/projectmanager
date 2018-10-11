import React, { Component } from 'react';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state ={
      projects:[
        {
          title: 'Buisness Website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          title: 'Ecommerce Shopping cart',
          category: 'Web Development'
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">My App
      <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
