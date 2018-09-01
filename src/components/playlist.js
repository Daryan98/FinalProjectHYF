import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

let songNum = 0;
class PLayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playlist: "none",
      SongData: [],
      options: {
        name: "Canon (piano version)",
        defaultPlayIndex: songNum,
        volume: 100,
        muted: false,
        networkState: 1,
        readyState: 4,
        paused: false,
        autoPlay: false,
        isMobile: false,
        ended: false,
        preload: "true",
        openText: "Play",
        closeText: "pause",
        panelTitle: "Song",
        toggleMode: false,
        mode: "full",
        startDate: null,
        defaultPosition: { top: 20, left: 400 },
        played: { length: 1 }
      }
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/categories")
      .then(response => {
        let songs = response.data.filter(
          song => song.language === this.props.location.language
        );
        let arr = [];
        songs.forEach(song => {
          arr.push({
            name: song.title,
            singer: song.artist,
            cover: "https://www.lijinke.cn/music/1387583682387727.jpg",
            musicSrc: "http://www.nihilus.net/soundtracks/Static%20Memories.mp3"
          });
        });

        this.setState({
          SongData: songs,
          options: {
            audioLists: arr,
            // name: "Canon (piano version)",
            // defaultPlayIndex: songNum,
            // volume: 100,
            // muted: false,
            // networkState: 1,
            // readyState: 4,
            // isMobile: false,
            // paused: false,
            // ended: false,
            // preload: "true",
            // openText: "Play",
            // closeText: "pause",
            // panelTitle: "Song",
            // toggleMode: false,
            // mode: "full",
            autoPlay: false
            // startDate: null,
            // defaultPosition: { top: 20, left: 400 },
            // played: { length: 1 }
          }
        });
      })
      .catch(function(error) {});
  }

  render() {
    return (
      <div className="PlayListsection">
        <div className="playList">
          <img
            width="100"
            src="https://raw.githubusercontent.com/dpfernandes/class04-final-project/master/ama1.png"
          />
          <a href="/allplaylist" className="goBack_btn">
            <span>&#171; </span>
            Go back!
          </a>
          <h2>{this.props.location.language} Playlist</h2>
        </div>

        <div className="allsongs">
          <div className="song_head">
            <span className="number">#</span>
            <span className="name">Name</span>
            <span className="year">Year</span>
          </div>

          {this.state.SongData.map((song, index) => {
            return (
              <div className="song">
                <span className="number">{index + 1}</span>

                <h3
                  key={index}
                  className={this.state.activeItem === index ? "active" : ""}
                >
                  {song.title}
                </h3>
                <span className="year">{song.year}</span>
              </div>
            );
          })}
        </div>
        {console.log(songNum)}

        <ReactJkMusicPlayer {...this.state.options} />
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

          .allsongs .song h3.active {
            color: rgba(50, 109, 233, 1);
          }

          .allsongs .song h3 .icon {
            opacity: 0;
            transition: all 0.3s;
          }
          .allsongs .song h3:hover .icon {
            opacity: 1;
            transition: all 0.3s;
          }
          .allsongs .song h3 .icon.active {
            opacity: 1;
            color: rgba(50, 109, 233, 1);
          }

          .allsongs .song .year {
            display: inline-block;
            width: 10%;
          }

          a.goBack_btn {
            margin-top: 10px;
            display: block;
            text-decoration: none;
            color: #333;
          }
          a.goBack_btn span {
            display: inline;
            font-size: 20px;
            margin-right: -10px;
            opacity: 0;
            transition: all 0.2s;
          }
          a.goBack_btn:hover {
            color: rgba(50, 109, 233, 1);
          }
          a.goBack_btn:hover span {
            margin-right: 0px;
            opacity: 1;
          }
        `}</style>
      </div>
    );
  }
}

export default withRouter(PLayList);
