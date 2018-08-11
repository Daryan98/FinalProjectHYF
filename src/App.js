import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, withRouter } from 'react-router-dom';
import ReactiveBase from "./components/ReactiveBase";
import Song from "./components/song";
import "./index.css";

import data from "./data/data.json";



class App extends Component {
  constructor() {
    super();
    this.state = {
      artistArray: [],
    };
    this.OpenSong = this.OpenSong.bind(this)
  }
  routeRender() {
    if (this.props.location.pathname == '/') {
      return <ReactiveBase></ReactiveBase>
    }
  }
  OpenSong=(props) =>{
    let songObject = data.filter(item => item.title == props.match.params.title)[0];
    return <Song {...songObject}></Song>

  }


  render() {
    return (
      <div>
        {this.routeRender()}
        <Route path='/song/:title' render={this.OpenSong} />
      </div>      
    );
  }
}

export default withRouter(App);
