import React from "react";
import { actors } from "../data";

function Actors() {

  const eachActor= actors.map((actor)=>{
    return <div key={actor.name}>
      {actor.name}
      <ul>
        {actor.movies.map((movie)=>{
          return <li key={movie}>{movie}</li>
        })}
        </ul>
    </div>
  })
  return (
  <div>
    <h1>Actors Page</h1>
    {eachActor}
  </div>
  );
}

export default Actors;
