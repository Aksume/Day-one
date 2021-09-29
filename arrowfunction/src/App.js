// import logo from './logo.svg';
// import './App.css';
// import MovieCard from './Components/MovieCard';

// function App() {
//   return (
//     <div className="App">
//      <MovieCard/>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { useEffect, useState } from "react";
// import styled from "styled-components";

function App() {
  const [movieData, setMovieData] = useState({});
  // const [searchText, setSearchText] = useState("");

  const requestByTitle = async (movieName) => {
    const res = await fetch(
      `http://www.omdbapi.com/?t=${movieName}&apikey=${process.env.REACT_APP_KEY}`
    );

    const data = await res.json();
    console.log(data)
    setMovieData(data);
  };
// requestByID
  // const requestByID = async (id, cb) => {
  //   const res = await fetch(
  //     `http://www.omdbapi.com/?i=${id}&apikey=${process.env.REACT_APP_KEY}`
  //   );
  //   const data = await res.json();
  // };

  useEffect(() => {
    requestByTitle(" Batman v Superman");
    //  requestByTitle("The god father");
  }, []);

 

  return (
    <div className="App">
   
      <div className="movie-img">
        <img src={movieData?.Poster} alt="broken image" />
        </div>
        <div  className="movie-description">               
               <div>
        <h3 className="Title"> {movieData?.Title}</h3>
          <h3 className="Rating">{movieData?.imdbRating}</h3>
          </div>
        <h3 className="Rated"> {movieData?.Rated}</h3>
         <h3 className="Runtime"> {movieData?.Runtime}</h3>               
        <h3 className="Genre"> {movieData?.Genre}</h3>
        <h3>Plot </h3>
        <h3 className="Plot"> {movieData?.Plot}</h3>
         <h3>Actors </h3>
         <h3 className="Actors"> {movieData?.Actors}</h3>
           </div>
      
    </div>
  );
}
 

export default App;
