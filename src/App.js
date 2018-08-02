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

    };

    this.OpenSong = this.OpenSong.bind(this)
  }

  routeRender() {
    //when i exported the app i impoted (withRouter) method and also exported it so i can easellu use location.pathname, this will automaticlly give me the path name for where i am
    if (this.props.location.pathname == '/') {
      return (
            <ReactiveBase></ReactiveBase>
            )
    }
}
  OpenSong(){
    return <Song></Song>
  }
  render() {
    return (
      <div>
        {this.routeRender()}
        <Route path='/song/' render={this.OpenSong} />
      </div>
      
    );
  }
}

export default withRouter(App);
