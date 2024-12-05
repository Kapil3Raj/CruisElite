import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./navbar.jsx";
import Home from "./home.jsx";
import Food from "./food_order.jsx";
import FoodCart from "./foodCart.jsx";
import Ticketbook from "./ticket_book.jsx";
import Ticketseat from "./ticket_seat.jsx";
import Ticketconfirm from "./ticket_confirm.jsx";
import Gym from "./gym.jsx";
import Saloon from "./saloon.jsx";
import Footer from "./footer.jsx";

function App() {
  return (
    <BrowserRouter>
       <Nav></Nav>
       <Routes>
            <Route path="/CruisElite" element={<Home></Home>}></Route>
            <Route path="/food" element={<Food></Food>}></Route>
            <Route path="/food_cart" element={<FoodCart></FoodCart>}></Route>
            <Route path="/ticket_book" element={<Ticketbook></Ticketbook>}></Route>
            <Route path="/ticket_seat" element={<Ticketseat></Ticketseat>}></Route>
            <Route path="/ticket_confirm" element={<Ticketconfirm></Ticketconfirm>}></Route>
            <Route path="/gym" element={<Gym></Gym>}></Route>
            <Route path="/saloon" element={<Saloon></Saloon>}></Route>
       </Routes>
       <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
