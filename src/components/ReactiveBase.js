import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  ReactiveBase,
  CategorySearch,
  ResultCard,
  SingleDropdownList
} from "@appbaseio/reactivesearch";
import RadioSearch from "../components/search_radio_form";
import Footer from "../components/footer";

const searchDataFieldDict = {
  all: ["artist", "title"],
  artist: ["artist"],
  title: ["title"]
};

class Reactive_Base extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FilterBy: "all",
      url_title: "default"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      FilterBy: event.target.value
    });
  };
  render() {
    return (
      <div>
        <ReactiveBase app="bands" type="_doc" url="https://amp.a-magdy.me">
          <div className="row">
            <div className="col" />
            <div
              className="navbar"
              style={{
                width: "100%",
                height: "100px"
              }}
            >
              <div className="logo">
                <img src="https://raw.githubusercontent.com/dpfernandes/class04-final-project/master/ama1.png" />
              </div>
              <CategorySearch
                componentId="searchbox"
                // dataField={["title", "artist"]}
                dataField={searchDataFieldDict[this.state.FilterBy]}
                categoryField="title.raw"
                placeholder="Search for bands"
                innerClass={{ input: "text-input" }}
                className="CategorySearch"
              />

              <SingleDropdownList
                componentId="yearfilter"
                dataField="year.raw"
                title="PubYear"
                size={100}
                sortBy="asc"
                defaultSelected="All Years"
                showCount={true}
                placeholder="Search Music"
                selectAllLabel="All Years"
                react={{ and: ["searchbox"] }}
                showFilter={true}
                filterLabel="Year"
                URLParams={false}
                className="dropdown"
              />
              <RadioSearch
                handleChange={this.handleChange}
                FilterBy={this.state.FilterBy}
              />
              <div className="clear-fix" />
            </div>
            <div
              className="sections_name"
              style={{
                display: "block",
                width: "100%",
                height: "300px",
                color: "#fff",
                textAlign: "center",
                lineHeight: "300px",
                backgroundsize: "cover",
                background:
                  "linear-gradient( to right bottom, rgba(50,109,233,0.9), rgba(126,82,232,0.9) ), url('https://images7.alphacoders.com/480/thumb-1920-480927.jpg'),no-repeat"
              }}
            >
              <h1>All Songs</h1>
            </div>
            <ResultCard
              componentId="result"
              dataField="titles"
              title="Results"
              from={0}
              size={15}
              pagination={true}
              pages={5}
              react={{ and: ["searchbox", "yearfilter"] }}
              onData={res => {
                return {
                  description: (
                    <Link
                      className="card_link"
                      to={`/song/${
                        this.state.url_title != "default"
                          ? this.state.url_title
                          : null
                      }`}
                    >
                      <div className="card_content">
                        <img
                          width="100"
                          src="https://raw.githubusercontent.com/dpfernandes/class04-final-project/master/ama1.png"
                        />
                        <h2>{res.title}</h2>
                        <p>{res.artist + " " + "★".repeat(res.location)}</p>
                        <p>{res.year}</p>
                      </div>
                    </Link>
                  ),

                  containerProps: {
                    onMouseEnter: () => {
                      let urlTitle = res.title;
                      this.setState({ url_title: urlTitle });
                    },
                    onclick: () => {
                      let urlTitle = res.title;
                      this.setState({ url_title: urlTitle });
                    }
                  }
                };
              }}
              innerClass={{ listItem: "itemcontainer" }}
              className="ResultCard"
              style={{ textAlign: "center" }}
            />
            <div className="clear-fix" />
            <div className="contact_btns">
              <a href="/allplaylist" className="playlist">
                <span>All Playlists</span>
              </a>
              {/* <span className="middle">|</span> */}
            </div>
          </div>
        </ReactiveBase>
        <Footer />

        <style jsx>{`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          .clear-fix {
            clear: both;
          }
          .css-omf3o4 {
            margin: 0 0;
          }
          .css-1pwe92q {
            display: none;
          }
          .css-14pyrcn {
            display: none;
          }

          .CategorySearch {
            padding: 0;
            width: 400px;
            height: 45px;
            line-height: 15px;
            display: inline-block;
            float: left;
            margin-top: 30px;
            margin-bottom: 0;
            margin-left: 150px;
            display: block;
            float: left;
          }
          .CategorySearch .css-1mnns6r {
            margin-top: 25px;
          }
          .CategorySearch .text-input {
            display: inline;
            margin-top: 0;
            height: 35px;
            width: 400px;
            border: 0;
            background-color: #efefef;
            padding: 10px 35px;
            font-size: 14px;
          }
          .CategorySearch .text-input::placeholder {
            font-size: 14px;
            margin-bottom: -15px !important;
          }
          .CategorySearch .text-input:value {
            font-size: 14px;
          }
          .CategorySearch .search-icon {
            height: 12px;
          }
          .css-c0lsh8 svg.search-icon {
            fill: #467beb;
          }
          .logo {
            width: 55px;
            height: 55px;
            position: relative;
            margin-left: 20px;
            display: inline;
            float: left;
            margin-top: 15px;
          }
          .logo img {
            width: 100%;
            height: 100%;
          }

          .dropdown {
            display: inline;
            float: left;
            width: 150px;
          }
          .dropdown:hover .css-1bts2wl {
            background-color: #efefef;
          }

          .css-1bts2wl {
            margin-top: 25px;
            min-height: 35px !important;
            border-radius: 22px;
            background-color: #efefef;
            border: none;
          }

          .card_link {
            text-decoration: none;
          }

          .ResultCard {
            display: block;
            width: 100%;
            float: left;
            margin-top: 40px;
            margin-bottom: 50px;
            z-index: -1;
          }

          .card_content {
            color: #010101;
          }

          .ResultCard .css-yjv3eo p {
            text-align: left;
            margin-left: 30px;
          }

          .ResultCard .itemcontainer {
            border: 0;
            width: 17%;
            position: relative;
          }
          .ResultCard .itemcontainer .css-g6qnsb {
            width: 80%;
            height: 140px;
            margin-left: 10%;
            display: none;
          }
          .ResultCard .itemcontainer {
            border: 0;
            max-width: 18%;
          }
          .css-106d0ed {
            width: auto;
            -webkit-box-flex: 1;
            -webkit-flex-grow: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            outline: none;
            -webkit-text-decoration: none;
            text-decoration: none;
            min-width: 18%;
            max-width: 22.5%;
            border-radius: 0.25rem;
            background-color: #fff;
            height: 240px;
            flex-direction: column;
            justify-content: space-between;
            margin: 8px;
            padding: 10px;
            overflow: hidden;

            // box-shadow: none;
            box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
            color: #424242;
            -webkit-transition: all 0.3s ease;
            transition: all 0.3s ease;
          }

          div.contact_btns {
            position: absolute;
            display: inline;
            right: 50px;
            top: 30px;
            height: 35px;
            padding: 0;
            margin: 0;
          }

          div.contact_btns span.middle {
            font-size: 20px;
          }
          div.contact_btns a {
            padding: 5px 30px 8px;

            background: linear-gradient(
              to right bottom,
              rgba(50, 109, 233, 0.9),
              rgba(126, 82, 232, 0.9)
            );
            color: #fff;
            border-radius: 20px;
            line-height: 35px;
            margin: 0 20px;
            text-decoration: none;
          }
          div.contact_btns a:hover {
            cursor: pointer;
          }
          .css-11s5mbb {
            margin-top: 50px;
          }
        `}</style>
      </div>
    );
  }
}
export default Reactive_Base;
