import React, { Component } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import { Route, withRouter } from "react-router-dom";
import ReactiveBase from "./components/ReactiveBase";
import Song from "./components/song";
import "./index.css";

import data from "./data/data.json";

import AllPlaylists from "./components/all_playLists";
import PLayList from "./components/playlist";

import Footer from "./components/footer";

class App extends Component {
  constructor() {
    super();
    this.state = {
      artistArray: []
    };
    this.OpenSong = this.OpenSong.bind(this);
  }

  routeRender() {
    if (this.props.location.pathname == "/") {
      return <ReactiveBase />;
    }

    if (this.props.location.pathname == "/allplaylist") {
      return <AllPlaylists />;
    }

    // if (this.props.location.pathname == "/playlist") {
    //   return <PLayList />;
    // }
  }
  OpenSong = props => {
    let songObject = data.filter(
      item => item.title == props.match.params.title
    )[0];
    return <Song {...songObject} />;
  };

  PLaylist = props => {
    let songObject = data.filter(
      item => item.title == props.match.params.title
    )[0];
    return <PLayList {...songObject} />;
  };
  render() {
    return (
      <div>
        {this.routeRender()}
        <Route path="/song/:title" render={this.OpenSong} />
        <Route path="/allplaylist/playlist/:playlist" render={this.PLaylist} />
        <Footer />
      </div>
    );
  }
}

export default withRouter(App);
