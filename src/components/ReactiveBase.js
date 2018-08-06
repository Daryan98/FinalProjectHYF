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
  import Radio_search from "../components/search_radio_form";

  import data from "../data/data.json";


  const searchDataFieldDict = {
    "all": ["artists", "titles", "publishedYear"],
    "publishedYear": ["publishedYear.search"],
    "artists": ["artists"],
    "titles": ["titles"]
  }

  class Reactive_Base extends Component {
    constructor(props){
    super(props)

    this.state = {
      FilterBy: "",
      url_title: "default",
    };


  }


  

    render() {
    return (
        <ReactiveBase app="bands" type="_doc" url="https://amp.a-magdy.me">
        <div className="row">
          <div className="col" />
          <div>
            <div className="logo">
              <img src="https://raw.githubusercontent.com/dpfernandes/class04-final-project/master/ama1.png"/>
            </div>
            <CategorySearch
              componentId="searchbox"
              dataField={['titles', 'artists']}
              dataField={searchDataFieldDict[this.state.FilterBy]}
              categoryField="titles.raw"
              placeholder="Search for music"
              innerClass={{ input: "text-input" }}
              className="CategorySearch"
            />

            <Radio_search
              handleChange={this.handleChange}
              FilterBy={this.state.FilterBy}
            />
            {/* <SingleDropdownList
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
            </SingleDropdownList> */}
          </div>
          <ResultCard
            componentId="result"
            dataField="titles"
            title="Results"
            from={0}
            size={10}
            pagination={true}
            pages={5}
            react={{ and: ["searchbox", "yearfilter"] }}
            onData={res => {

              return {     
                description: (
                <Link to={`/song/${this.state.url_title != "default" ? this.state.url_title : null}`}>         
                  <div>
                    <img width="100" src="https://raw.githubusercontent.com/dpfernandes/class04-final-project/master/ama1.png" />
                    <h2>{res.title}</h2>
                    <p>
                      {
                        res.artist +
                        " " +
                        "★".repeat(res.location)}
                    </p>
                    <p>{res.publishedYear}</p>
                  </div>
              </Link>

                ),

                containerProps: {
                    onMouseEnter: () => { 
                    let urlTitle = res.title;
                    this.setState({url_title: urlTitle})

                  },
                  onclick: () => { 
                    let urlTitle = res.title;
                    this.setState({url_title: urlTitle})
                  }
                }
              }
          
            }
            }
            
            innerClass={{ listItem: "itemcontainer" }}
            className="ResultCard"
            style={{ textAlign: "center" }}
          />
        </div>
        <style jsx>{`
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          .CategorySearch {
            padding: 0;
            width: 400px;
            height: 45px;
            line-height: 15px;
            display: inline;
            float: left;
            // position: absolute;
            margin-top: 40px;
            margin-left: 40%;
            transform: translateX(-50%);

          }
          .CategorySearch .css-1mnns6r {
            margin-top: 12px;
          }
          .CategorySearch .text-input{
            margin-top: 0;
            height: 35px;
            width: 400px;
            border: 0;
            background: #efefef;
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
          .CategorySearch .search-icon{
            height: 12px;
          }


          .logo{
            width: 55px;
            height: 55px;
            position: relative;
            margin-left: 20px;
            display: inline;
            float: left;
          }
          .logo img{
            width: 100%;
            height: 100%;
          }

          .ResultCard{
            display: block;
            width: 100%;
            float: left;
            margin-top: 40px;
          }
          .ResultCard .css-yjv3eo p{
            text-align: left;
            margin-left: 30px;
          }

          .ResultCard .itemcontainer{
            border: 0;
            width: 17%;
            position: relative;
          }
          .ResultCard .itemcontainer .css-g6qnsb {
            width: 80%;
            height: 140px;
            margin-left: 10%; 
          }
          .ResultCard .itemcontainer{
            border: 0;
            max-width: 18%;
          }
          .css-106d0ed{
            width:auto;
            -webkit-box-flex:1;
            -webkit-flex-grow:1;
            -ms-flex-positive:1;
            flex-grow:1;
            outline:none;
            -webkit-text-decoration:none;
            text-decoration:none;
            min-width:18%;
            max-width:22.5%;
            border-radius:0.25rem;
            background-color:#fff;
            height:240px;
            flex-direction:column;
            justify-content:space-between;
            margin:8px;
            padding:10px;
            overflow:hidden;
            
            // box-shadow: none;
            box-shadow:0 0 4px 0 rgba(0,0,0,0.2);
            color:#424242;
            -webkit-transition:all 0.3s ease;
            transition:all 0.3s ease;
}
        `}</style>

      </ReactiveBase>
    )
}
}
export default Reactive_Base;