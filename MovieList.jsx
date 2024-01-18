import React from "react";
import "./MovieList.css";
import fire from "../../assets/fire.png";
import MovieCard from "./MovieCard";
import { useEffect } from "react";

const MovieList = () => {
  useEffect(() => {
    fetchMovies();
}, []);

const fetchMovies = async () =>{
      const response = await fetch(
         "https://api.themoviedb.org/3/movie/popular?api_key=1cf50e6248dc270629e802686245c2c8"
       );
       console.log(response);
  }

  return (
    <section className="movieList">
      <header className="align_center movieList_header">
        <h2 className="align_center movieList_heading">
          Popular <img src={fire} alt="" className="navbar_emoji" />
        </h2>

        <div className="align_center movieList_fs">
          <ul className="align_center movie_filter">
            <li className="movie_filter_item active">8+ Star</li>
            <li className="movie_filter_item">7+ Star</li>
            <li className="movie_filter_item">6+ Star</li>
          </ul>

          <select name="" id="" className="movieList_sorting">
            <option value="">SortBy</option>
            <option value="">Date</option>
            <option value="">Rating</option>
          </select>
          <select name="" id="" className="movieList_sorting">
            <option value="">Ascending</option>
            <option value="">Descending</option>
          </select>
        </div>
      </header>

      <div className="movieCards">
        <MovieCard />
      </div>
    </section>
  );
};

export default MovieList;
