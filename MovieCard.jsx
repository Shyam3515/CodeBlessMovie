import React from "react";
import "./MovieCard.css";
import star from '../../assets/glowing-star.png'

const MovieCard = () => {
  return (
    <a href="" className="movieCard">
      <img
        src="https://www.tallengestore.com/cdn/shop/products/Dora_The_Explorer_And_The_Lost_City_Of_Gold_-_Hollywood_English_Movie_Poster_1_66c87e56-24a2-4135-b709-a6b98a7f7bce.jpg?v=1577693664"
        alt=""
        className="moviePoster"
      />

      <div className="movie_details">
        <h3 className="movie_details_heading">Movie Name</h3>
        <div className="align_center movie_date_rate">
            <p>10-20-2020</p>
            <p className="align_center">8.0 <img src={star} alt="" className="card_emoji"/></p>
        </div>
        <p className="movie_description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla odio, inventore a placeat beatae obcaecati.
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
