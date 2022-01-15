

import React from "react";

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className="image-container d-flex justify-content-start m-3">
					<img src={movie.Poster} alt="movie"></img>
					<div  className ="both">
						<h1> {movie.Title}</h1>
                        <button>{movie.Type}</button>
                      
					</div> 
				</div>
			))}
		</>
	);
};

export default MovieList;