// import React, { useEffect, useState } from 'react'

// import {   getMoviesBySearchTerm } from '../Components/utils'

// const MovieCard = (SearchTerm) => {
//     const [Movies, setMovies] = useState([])
//     const [searchText, setSearchText] = useState("");


//     useEffect(() => {
//        getMoviesBySearchTerm (SearchTerm).then(movieData => {
//           console.log(movieData);
//           setMovies(movieData);
//         });
//     }, [])
//        const onChange = (e) => {
//     setSearchText(e.target.value);
//   };

//   const launchSearch = () => {
//     MovieCard(searchText);
//   };
//     return (
//         <div>
//              <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           launchSearch();
//         }}
//       >
//         <input onChange={(e) => onChange(e)} type="text" />
//         <button>Search</button>
//       </form>
//             {Movies.map((Movie) => {
//                 return  <div key ={Movie.imdbID}>
//                  <div>{Movies?.Title}</div>
//                     <img src={Movies?.Poster} alt="" />
//                     </div>
//               }) } 
//         </div>
//     )
// }

// export default MovieCard


// from youtube

import React, { useState, useEffect } from "react";
import MovieList from "./MovieList";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
import "./MovieCard.css"

const MovieCard = () => {
  const [movies, setMovies] = useState([
		{
			Title: "Batman Begins",
			Year: "1980",
			imdbID: "tt0080684",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		},
		{
			Title: " Batman v Sup...",

			imdbID: "tt0086190",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
		},
		{
			Title: "Batman",
			Year: "1977",
			imdbID: "tt0076759",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
		},
		{
			Title: " Batman Return",
			Year: "1983",
			imdbID: "tt0086190",
			Type: "movie",
			Poster:
				"https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
		},
	]);

	return (
		<div className="container-fluid movie-app">
			<div className="row">
				<MovieList movies={movies} />
			</div>
		</div>
	);
};

export default MovieCard;