import { useState } from "react";
import style from "../components/foodCart.module.css";

import cancel from "../images/cancel.png";
import { useLocation, useNavigate } from "react-router-dom";

export default function FoodCart() {
  const location = useLocation();
  const navigate = useNavigate();
  const cart_data = location.state || [];
  const [roomNo,setroomNo] = useState();

  function itemsList() {
    return cart_data.map((item, index) => (
      <div className={style.items} key={index}>
        <img src={item.src} alt={item.name} />
        <h2>{item.name}</h2>
        <h3>{item.qtn}</h3>
        <img src={cancel} id={style.cancelBtn} alt="Cancel" />
      </div>
    ));
  }



  function roomNumberInput(event){
    const value = event.target.value; 
    setroomNo(value);
  }

  return (
    <div id={style.foodCart}>
      <h1>My Orders</h1>
      <input type="text" placeholder="Enter your room number" name="roomNo"  onChange={roomNumberInput}/>
      <div className={style.foodItems}>
        {itemsList()}
      </div>
      <div id={style.cartBtn}>
        <button onClick={()=>navigate("/food")}>Cancel</button>
        <button onClick={()=>navigate("/",{ state: {roomNo ,cart_data }})}>Confirm</button>
      </div>
    </div>
  );
}
