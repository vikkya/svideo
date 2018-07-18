import React from "react";
import ShowCard from "./ShowCard";
import perdata from "../../data.json";

const Search = () => (
    <div className="search">
        <div>
            {perdata.shows.map(show => <ShowCard key={show.imdbID} {...show}/>)}
        </div>
    </div>
);

export default Search;