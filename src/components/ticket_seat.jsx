import { useState } from "react";
import style from "../components/ticket_seat.module.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Ticketseat() {
    const navigate = useNavigate();
    const movie_data = useLocation().state;
    const [ticket_time , set_ticket_time] = useState();
    const [no_seat , set_no_seat]= useState(1);
    const [seat_data,set_seat_data]=useState([]);


    function seat_clicked(event) {
        const seatClass = event.target.classList[0]; 
        const seat_parent = event.target.parentElement.className; 

        if (event.target.classList.contains(style.selected)) {
         
          event.target.classList.remove(style.selected);
          set_no_seat(no_seat - 1);
          set_seat_data((prev) => prev.filter((seat) => seat !== seatClass)); 
        } else {
          
          if (no_seat <= 5) {
            event.target.classList.add(style.selected);
            set_no_seat(no_seat + 1);
            set_seat_data((prev) => [...prev,`${seat_parent}-${seatClass} |`]);
    
          } else {
            alert("You can only select up to 5 seats!");
          }
        }
      }
          
      
        function clear_all() {
            set_no_seat(1);
            set_seat_data([]);
            const seats = document.getElementsByClassName(style.selected);
            Array.from(seats).forEach((seat) => {
                seat.classList.remove(style.selected);
            });
            
        }
        
        function time_click(event){  
           const time =  event.target.innerHTML;
           set_ticket_time(time); 

        }

       
        
    

    return (
        <div id={style.ticket_seat}>
            <div id={style.info}>
                <span style={{ backgroundColor: "skyblue" }}></span>
                <h2>Available</h2>
                <span style={{ backgroundColor: "crimson" }}></span>
                <h2>Booked </h2>
                <span style={{ backgroundColor: "lightgreen" }}></span>
                <h2>Selected</h2>
                <button onClick={(event)=>{time_click(event)}}>10:30AM</button>
                <button onClick={(event)=>{time_click(event)}}>4:30PM</button>
                <h2>Max: 5 seats</h2>
            </div>
            <div id={style.blueprint}>
                <div id={style.screen}></div>
                <div className={style.seats}>
                    <div>
                        <div className="A">
                            <div className="S1"  onClick={(event) => seat_clicked(event)}></div>
                            <div className="S2" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S3" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S4" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S5"onClick={(event) => seat_clicked(event)}></div>
                            <div className="S6" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S7" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S8" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S9" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S10" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S11" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S12" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S13" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S14" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S15" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S16" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S17" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S18" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S19" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S20" onClick={(event) => seat_clicked(event)}></div>
                        </div>
                        <div className="B">
                        <div className="S1"  onClick={(event) => seat_clicked(event)}></div>
                            <div className="S2" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S3" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S4" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S5"onClick={(event) => seat_clicked(event)}></div>
                            <div className="S6" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S7" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S8" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S9" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S10" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S11" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S12" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S13" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S14" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S15" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S16" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S17" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S18" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S19" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S20" onClick={(event) => seat_clicked(event)}></div>
                        </div>
                    </div>
                    <div>
                        <div className="C">
                        <div className="S1"  onClick={(event) => seat_clicked(event)}></div>
                            <div className="S2" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S3" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S4" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S5"onClick={(event) => seat_clicked(event)}></div>
                            <div className="S6" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S7" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S8" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S9" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S10" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S11" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S12" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S13" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S14" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S15" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S16" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S17" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S18" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S19" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S20" onClick={(event) => seat_clicked(event)}></div>
                        </div>
                        <div className="D">
                        <div className="S1"  onClick={(event) => seat_clicked(event)}></div>
                            <div className="S2" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S3" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S4" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S5"onClick={(event) => seat_clicked(event)}></div>
                            <div className="S6" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S7" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S8" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S9" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S10" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S11" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S12" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S13" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S14" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S15" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S16" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S17" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S18" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S19" onClick={(event) => seat_clicked(event)}></div>
                            <div className="S20" onClick={(event) => seat_clicked(event)}></div>
                        </div>
                    </div>
                </div>
                <div className={style.seat_button}>
                    <button onClick={()=>{navigate("/ticket_book")}}>Cancel</button>
                    <button onClick={() => navigate("/ticket_confirm", { state: { movie_data, ticket_time, seat_data } }) } > Confirm </button>
                    <button onClick={clear_all}>Clear All</button>
                </div>
            </div>
        </div>
    );
}
