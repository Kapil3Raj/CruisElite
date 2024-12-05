import style from "./ticket_confirm.module.css";
import { useLocation } from "react-router-dom";

import Goat from "../images/movies/Goat.jpg";
import Salaar from "../images/movies/Salaar.jpg";
import Jailer from "../images/movies/Jailer.jpg";
import Pushpa from "../images/movies/Pushpa.jpg";


export default function Ticketconfirm(){
    const ticket_data = useLocation().state;
    console.log(ticket_data)
    
    return(<div id={style.ticket_confirm}>
        <div id={style.ticket_confirm_con}>
            <div className={style.movie_details}>
                <img src={ticket_data.movie_data.movie.poster} alt={ticket_data.movie_data.movie.name}></img>
            </div>
            <div className={style.seat_details}>
                <h1>CruisElite</h1>
                
                <h2>Name : {ticket_data.movie_data.movie.name}</h2>
                <h2>Rating : {ticket_data.movie_data.movie.rating}</h2> 
                
                <h2>{ticket_data.movie_data.movie.genre}</h2> 
                <h3>Time : {ticket_data.ticket_time}</h3>
                <h3>Seat Number : {ticket_data.seat_data}</h3>
                <h1>Enjoy your show</h1>
            </div>
        </div>
    </div>)

}