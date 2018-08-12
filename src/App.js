import React, { Component } from "react";
import ReactDOM from "react-dom";
import {
  ReactiveBase,
  CategorySearch,
  RangeSlider,
  ResultCard,
  SingleDropdownList,
  SelectedFilters
} from "@appbaseio/reactivesearch";
import Radio_search from "./components/search_radio_form";
import "./index.css";

const searchDataFieldDict = {
  "all": ["artist", "title", "year"],
  "year": ["year.search"],
  "artist": ["artist"],
  "title": ["title"]
}

class App extends Component {
  state = {
    FilterBy: "all"
  };

  handleChange = event => {
    this.setState({
      FilterBy: event.target.value
    });
  };

  render() {
    // console.log({FilterBy: this.state.FilterBy});
    // const searchDataField =
    //   this.state.FilterBy === "all"
    //     ? ["title", "artist", "year"]
    //     : [this.state.FilterBy];

    return (
      // add and remove and create playlist

      <ReactiveBase app="bands" type="_doc" url="https://amp.a-magdy.me">
        <div className="row">
          <div className="col" />
          <div>
            <CategorySearch
              componentId="searchbox"
              // dataField={['title', 'artist']}
              dataField={searchDataFieldDict[this.state.FilterBy]}
              categoryField="title.raw"
              placeholder="Search for music"
              style={{ padding: "5px", marginTop: "100px" }}
              innerClass={{ input: "text-input" }}
              className="CategorySearch"
            />

            <Radio_search
              handleChange={this.handleChange}
              FilterBy={this.state.FilterBy}
            />
          </div>
          <ResultCard
            componentId="result"
            dataField="title"
            title="Results"
            from={0}
            size={4}
            pagination={true}
            pages={5}
            react={{ and: ["searchbox", "yearfilter"] }}
            onData={res => {
              console.log(res.year);
              return {
                image:
                  "https://raw.githubusercontent.com/dpfernandes/class04-final-project/master/ama1.png",

                title: "Song Title: " + res.title,
                description: (
                  <div>
                    <p>
                      {"Description: " +
                        res.artist +
                        " " +
                        "★".repeat(res.location)}
                    </p>
                    <p>{"Pub Year: " + res.year}</p>
                  </div>
                ),

                containerProps: {
                  onMouseEnter: () => console.log("😁"),
                  onMouseLeave: () => console.log("🙀")
                }
              };
            }}
            innerClass={{ listItem: "itemcontainer" }}
            className="ResultCard"
            style={{ textAlign: "center" }}
          />
        </div>
      </ReactiveBase>
    );
  }
}

export default App;
