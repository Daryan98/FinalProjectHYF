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
    //when i exported the app i impoted (withRouter) method and also exported it so i can easellu use location.pathname, this will automaticlly give me the path name for where i am
    if (this.props.location.pathname == '/') {
      return (<ReactiveBase></ReactiveBase>)
    }
}
  OpenSong=(props) =>{
  
    let artist = data.filter(item => {

      
      this.setState({artistArray: "1"})
        // == props.match.params.artists){
      });
      
      let string = "Hello Daryan".replace(/\s+/g, '');
      console.log(string)
      // item.artist == props.match.params.artists)[0];
    // let urlArtists = artist.replace(/\s+/g, '');
    // console.log(artist)
    // console.log(props)

    return <Song {...artist}></Song>

  }
  render() {
    return (
      <div>
        {this.routeRender()}
        <Route path='/song/:artists' render={this.OpenSong} />

      </div>
      
    );
  }
}

export default withRouter(App);
