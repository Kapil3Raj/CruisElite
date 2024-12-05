import { useState } from "react";
import style from "../components/gym.module.css";
import gym from "../images/gym.jpg";
import { useNavigate } from "react-router-dom";

export default function Gym() {
const navigate = useNavigate();

  const [formData, setFormData] = useState({
    roomNo: "",
    date: "",
    time: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div id={style.gym} style={{backgroundImage:`url(${gym})`, backgroundPosition:"center" , backgroundRepeat:"no-repeat",backgroundSize: "cover",}}>
      <div className={style.gym_con}>
        <form onSubmit={handleSubmit}>
          <h1>GYM Booking</h1>
          <label htmlFor="roomNo">Room No : </label>
          <input
            id="roomNo"
            name="roomNo"
            type="text"
            value={formData.roomNo}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="date">Date : </label>
          <input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
          <label htmlFor="time">Timing : </label>
          <input
            id="time"
            name="time"
            type="time"
            value={formData.time}
            onChange={handleInputChange}
            required
          />
          <button type="submit"  onClick={()=>navigate("/CruisElite",{ state: {formData}})} >Book Now</button>
        </form>
      </div>
    </div>
  );
}
