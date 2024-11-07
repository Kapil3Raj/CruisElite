import style from "../components/food_order.module.css";
import cart from "../images/cart.png";

import noodles from "../images/food/noodles.jpeg";
import cake from "../images/food/cake.jpeg";
import chickentikka from "../images/food/chickentikka.jpeg";
import frenchfries from "../images/food/frenchfries.jpeg";
import friedchicken from "../images/food/friedchicken.jpeg";
import friedrice from "../images/food/friedrice.jpeg";
import icecream from "../images/food/icecream.jpeg";
import pizza from "../images/food/pizza.jpeg";
import butterchicken from "../images/food/butterchicken.jpeg";
import salad from "../images/food/salad.jpeg";
import vegroll from "../images/food/vegroll.jpeg";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Food() {

  const navigate = useNavigate();

  const [cart_data, setcart_data] = useState([])


  const [foodData, setFoodData] = useState([
    { name: "Hakka Noodles", rating: 3.4, src_name: noodles, qtn: 0 },
    { name: "Cake", rating: 3.0, src_name: cake, qtn: 0 },
    { name: "Chicken Tikka", rating: 3.4, src_name: chickentikka, qtn: 0 },
    { name: "Butter Chicken", rating: 4.0, src_name: butterchicken, qtn: 0 },
    { name: "French Fries", rating: 4.2, src_name: frenchfries, qtn: 0 },
    { name: "Fried Rice", rating: 3.7, src_name: friedrice, qtn: 0 },
    { name: "Ice Cream", rating: 4.4, src_name: icecream, qtn: 0 },
    { name: "Pizza", rating: 3.3, src_name: pizza, qtn: 0 },
    { name: "Salad", rating: 3.3, src_name: salad, qtn: 0 },
    { name: "Veg Roll", rating: 3.3, src_name: vegroll, qtn: 0 },
    { name: "Fried Chicken", rating: 3.3, src_name: friedchicken, qtn: 0 },
  ]);

  function increment(index) {
    setFoodData((prevData) =>
      prevData.map((item, i) =>
        i === index
          ? { ...item, qtn: item.qtn < 10 ? item.qtn + 1 : item.qtn }
          : item
      )
    );
  }

  function decrement(index) {

    setFoodData((prevData) =>
      prevData.map((item, i) =>
        i === index
          ? { ...item, qtn: item.qtn > 0 ? item.qtn - 1 : item.qtn }
          : item
      )
    );
  }

  function addToCart(item, index) {

    setFoodData((prevData) =>
      prevData.map((foodItem, i) =>
        i === index ? { ...foodItem, qtn: 0 } : foodItem
      )
    );
  
  
    setcart_data((prev) => [
      ...prev,
      {
        name: item.name,
        src: item.src_name,
        qtn: item.qtn
      }
    ]);
  }
  

  const cartQtn = cart_data.reduce((totalQuantity, item) => {
    return totalQuantity + item.qtn;
  }, 0);


  function foodDataRender() {
    return foodData.map((food, index) => (
      <div className={style.food_items} key={index}>
        <img src={food.src_name} alt={food.name} />
        <h3>{food.rating}</h3>
        <h2>{food.name}</h2>
        <div className={style.food_btn_con}>
          <button className={style.food_add_btn} onClick={() => addToCart(food ,index)}>
            <img src={cart} alt="cart" />ADD
          </button>
          <div className={style.food_Qtn}>
            <button onClick={() => decrement(index)}>-</button>
            <h2>{food.qtn}</h2>
            <button onClick={() => increment(index)}>+</button>
          </div>
        </div>
      </div>
    ));
  }


  return (
    <div id={style.food}>
        <div id={style.cart} onClick={()=>navigate("/food_cart",{ state: cart_data })}>
          <h3>{cartQtn}</h3>
          <img src={cart} alt="cart" />
        </div>

      <div className={style.food_con}>{foodDataRender()}</div>
    </div>
  );
}

export default Food;
