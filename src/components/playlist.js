import React from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

import { Icon } from "react-icons-kit";
import { play2 } from "react-icons-kit/icomoon/play2";

import Playlist from "../components/playlist";
class PLayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: "none",
      SongData: [],
      active: "notActive"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/categories")
      .then(response => {
        let songs = response.data.filter(
          song => song.language === this.props.location.language
        );

        this.setState({ SongData: songs });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleClick() {
    this.setState({
      active: "active"
    });
  }
  render() {
    return (
      <div className="PlayListsection">
        <div className="playList">
          <img
            width="100"
            src="https://raw.githubusercontent.com/dpfernandes/class04-final-project/master/ama1.png"
          />
          <h2>PlayLIst Name</h2>
        </div>

        <div className="allsongs">
          <div className="song_head">
            <span className="number">#</span>
            <span className="name">Name</span>
            <span className="year">Year</span>
          </div>

          {console.log(this.state.SongData[0])}
          {this.state.SongData.map((song, i) => {
            return (
              <div className="song">
                <span className="number">{i + 1}</span>
                <h3
                  onClick={this.handleClick}
                  className={
                    this.state.active === "active" ? "active" : "notActive"
                  }
                >
                  {" "}
                  <Icon className="icon" icon={play2} /> {song.title}
                </h3>
                <span className="year">{song.year}</span>
              </div>
            );
          })}
        </div>
        <div className="audio">
          <audio controls>
            <source
              src="http://www.nihilus.net/soundtracks/Static%20Memories.mp3"
              type="audio/mp3"
            />
          </audio>
        </div>

        <style jsx>{`
          .PlayListsection {
            max-width: 100%;
            display: block;
            position: relative;
            padding: 30px 100px;
          }

          .PlayListsection .playList {
            display: block;
            width: 100%;
            position: relative;

            margin-top: 10px;
          }

          .PlayListsection .playList img {
            display: inline;

            width: 300px;
          }
          .PlayListsection .playList h2 {
            display: inline-block;
            width: auto;
            font-size: 40px;
            margin-left: 30px;
            margin-top: 0;
            position: absolute;
            top: 150px;
            left: 430px;
          }
          .allsongs {
            width: 100%;
            height: auto;
            position: relative;
            margin: 100px 0 150px;
          }

          .allsongs .song_head {
            width: 100%;
            padding: 5px 0;
            border-top: 1px solid #ccc;

            border-bottom: 1px solid #ccc;
          }
          .allsongs .song_head .number {
            display: inline-block;
            width: 10%;
            text-align: center;
          }
          .allsongs .song_head .name {
            display: inline-block;
            width: 80%;
          }
          .allsongs .song_head .year {
            display: inline-block;
            width: 10%;
          }
          .allsongs .song {
            width: 100%;
            border-bottom: 1px solid #eee;
            color: #333;
          }
          .allsongs .song .number {
            display: inline-block;
            width: 10%;
            text-align: center;
          }
          .allsongs .song h3 {
            display: inline-block;
            width: 80%;
            font-size: 16px;
          }

          .allsongs .song .notActive {
            color: #333;
          }

          .allsongs .song .active {
            color: blue;
          }

          .allsongs .song .year {
            display: inline-block;
            width: 10%;
          }

          .audio {
            width: 100%;
            height: 80px;
            background: #f1f3f4;
            position: absolute;
            bottom: 0;
            left: 0;
          }

          audio {
            position: absolute;
            top: 10px;
            display: flex;
            border-radius: 0;
            width: 90%;
            left: 0%;
          }
        `}</style>
      </div>
    );
  }
}

export default withRouter(PLayList);
