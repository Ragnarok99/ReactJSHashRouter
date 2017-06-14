import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import About from './About.jsx';

class Home extends Component{
  constructor(props){
    super(props);

    this.state = {

    };
  }

  render(){
    return(
      <section>
        <h2>home</h2>
        <Link to='/about'>Go To About</Link>
      </section>
    );
  }
}

export default Home;