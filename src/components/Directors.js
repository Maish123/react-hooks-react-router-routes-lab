import React from "react";
import { directors } from "../data";

function Directors() {
  console.log(directors)

  // const directorMovies =director.movies.map((movie)=>{
  //   return <li key={movie}>
  //     {movie}
  //   </li>
  // })
  const eachDirector= directors.map((director)=>{
    return <div key={director.name}>
      {director.name}
      <ul>{director.movies.map((movie)=>{
        return <li key={movie}>{movie}</li>
      })}</ul>
    </div>
  });
  return (
  <div>
    <h1>Directors Page</h1>
    {eachDirector}
  </div>
  );
}

export default Directors;
