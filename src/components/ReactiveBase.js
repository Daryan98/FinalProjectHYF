import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
    ReactiveBase,
    CategorySearch,
    RangeSlider,
    ResultCard,
    SingleDropdownList,
    SelectedFilters
  } from "@appbaseio/reactivesearch";
  import Radio_search from "./search_radio_form";

  const searchDataFieldDict = {
    "all": ["artists", "titles", "publishedYear"],
    "publishedYear": ["publishedYear.search"],
    "artists": ["artists"],
    "titles": ["titles"]
  }

  class Reactive_Base extends Component {
    constructor(props){
      super(props);
    this.state = {
      FilterBy: "all"
    };
  }
  
    handleChange = event => {
      this.setState({
        FilterBy: event.target.value
      });
    };

    render() {
    return (
        <ReactiveBase app="bands" type="_doc" url="https://amp.a-magdy.me">
        <div className="row">
          <div className="col" />
          <div>
            <CategorySearch
              componentId="searchbox"
              // dataField={['titles', 'artists']}
              dataField={searchDataFieldDict[this.state.FilterBy]}
              categoryField="titles.raw"
              placeholder="Search for music"
              style={{ padding: "5px", marginTop: "100px" }}
              innerClass={{ input: "text-input" }}
              className="CategorySearch"
            />

            <Radio_search
              handleChange={this.handleChange}
              FilterBy={this.state.FilterBy}
            />
            <SingleDropdownList
              componentId='MusicSensor'
              dataField='publishedYear.raw'
              title='PubYear'
              size={100}
              sortBy='asc'
              defaultSelected='2000'
              showCount={true}
              placeholder='Search Music'
              selectAllLabel='All Years'
              react={{ and: ['searchbox' ] }}
              showFilter={true}
              filterLabel='Year'
              URLParams={false}
              className="dropdown">
            </SingleDropdownList>
          </div>
          <Link to={`/song/`}>
          <ResultCard
            componentId="result"
            dataField="titles"
            title="Results"
            from={0}
            size={4}
            pagination={true}
            pages={5}
            react={{ and: ["searchbox", "yearfilter"] }}
            onData={res => {
              console.log(res.publishedYear);
              return {
                image:
                  "https://raw.githubusercontent.com/dpfernandes/class04-final-project/master/ama1.png",

                title: "Song Title: " + res.titles,
                description: (
                  <div>
                    <p>
                      {"Description: " +
                        res.artists +
                        " " +
                        "★".repeat(res.location)}
                    </p>
                    <p>{"Pub Year: " + res.publishedYear}</p>
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
          </Link>
        </div>
      </ReactiveBase>
    )
}
}
export default Reactive_Base;