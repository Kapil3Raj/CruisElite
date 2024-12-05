import { useState } from "react";
import style from "../components/foodCart.module.css";

import cancel from "../images/cancel.png";
import { useLocation, useNavigate } from "react-router-dom";

export default function FoodCart() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state || [];
  const [roomNo,setroomNo] = useState();
  const [cart_data,set_cart_data] = useState(data);

  function itemsList() {
    return cart_data.map((item, index) => (
      <div className={style.items} key={index}>
        <img src={item.src} alt={item.name} />
        <h2>{item.name}</h2>
        <h3>{item.qtn}</h3>
        <img src={cancel} id={style.cancelBtn} alt="Cancel" onClick={()=>{delete_item(index)}} />
      </div>
    ));
  }


  function delete_item(item_index) {
   
    const updatedCart = cart_data.filter((_, index) => index !== item_index);
    set_cart_data(updatedCart);
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
        <button onClick={()=>navigate("/CruisElite",{ state: {roomNo ,cart_data }})}>Confirm</button>
      </div>
    </div>
  );
}
