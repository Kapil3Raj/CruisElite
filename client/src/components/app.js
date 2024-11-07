import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./navbar.jsx";
import Home from "./home.jsx";
import Food from "./food_order.jsx";
import FoodCart from "./foodCart.jsx";
import Footer from "./footer.jsx";
function App() {
  return (
    <BrowserRouter>
       <Nav></Nav>
       <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/food" element={<Food></Food>}></Route>
            <Route path="/food_cart" element={<FoodCart></FoodCart>}></Route>
       </Routes>
       <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
