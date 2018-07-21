import React, { Component } from "react";
import ShowCard from "./ShowCard";
import perdata from "../../data.json";

class Search extends Component {
    state = {
      searchTerm: ''
    }
    handleSearchTermChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }
  render() {
    return (
      <div className="search">
        <header>
          <h1>svideo</h1>
          <input type="text" placeholder="Search" onChange = {this.handleSearchTermChange} value={this.state.searchTerm}  />
        </header>
        <div>
          {perdata.shows.filter(show => `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0)
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
