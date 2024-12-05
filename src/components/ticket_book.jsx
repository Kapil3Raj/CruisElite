import style from "../components/ticket_book.module.css";

import Goat from "../images/movies/Goat.jpg";
import Salaar from "../images/movies/Salaar.jpg";
import Jailer from "../images/movies/Jailer.jpg";
import Pushpa from "../images/movies/Pushpa.jpg";

import { useNavigate } from "react-router-dom";




export default function Ticketbook() {

  const navigate = useNavigate();

  const movie_list_data = [
    { name: "Jailer", rating: 4.3, genre: ["Action|", "Thriller|", "Comedy"], poster: Jailer },
    { name: "Goat", rating: 4.5, genre: ["Drama|", "Biography|", "Sports"], poster: Goat },
    { name: "Pushpa", rating: 4.6, genre: ["Action|", "Drama|", "Crime"], poster: Pushpa },
    { name: "Salaar", rating: 4.8, genre: ["Action|", "Adventure|", "Thriller"], poster: Salaar }
  ];

  const movie_list = movie_list_data.map((movie,index) => {
   
    return (<div key={index} style={{
      backgroundImage: `url(${movie.poster})`, backgroundPosition: "center",
    }} onClick={() => (navigate("/ticket_seat" ,{state: { movie}}))}>
      <img
        src={movie.poster} alt={movie.name}
      ></img>
      <h2>{movie.name}</h2>
      <h3>{movie.rating}</h3>
      <h3>{movie.genre}</h3>
    </div>)
  })


  return (
    <div id={style.ticket_con}>
      {movie_list}

    </div>
  );
}
