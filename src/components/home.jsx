import crusie01 from "../images/crusie_&_island/crusie01.png";
import crusie04 from "../images/crusie_&_island/crusie04.jpeg";
import island02 from "../images/crusie_&_island/island02.png";
import gym from "../images/gym.jpg";
import cruiseroom from "../images/crusie_&_island/crusieroom.jpeg"

import { useNavigate } from "react-router-dom";




function Home() {

   const navigate = useNavigate();
   return (
      <div id="home">
         <div id="herosec">
            <span></span>
            <span></span>
            <span></span>
            <div className="img-container1" >
               <img src={cruiseroom} alt="cruise_img"/>
            </div>
            <div className="img-container2">
               <img src={crusie01} alt="cruise_img"/>
            </div>
            <div className="herosec_text">
               <h2>The</h2>
               <h1>CruisElite</h1>
               <h2>for the Elite</h2>
            </div>
         </div>



         <div id="about">
            
            <h1>Welcome to CruiseLite!</h1>
            <span></span>
            <span></span>
            <span></span>
            <div className="about_con">
               <div>
                  <img src={crusie04} alt="cruise_img"></img>
                  <div>
                     <h3>Our platform is dedicated to enhancing onboard life, enabling travelers to explore a variety of services—from reserving spa treatments and movie tickets to ordering meals, all with ease.</h3>
                     <button style={{backgroundColor:"var(--color0)", color:"var(--color1)",fontFamily:"var(--font3)",fontSize:"1.2rem",fontWeight:"800"}} onClick={()=>{navigate("/food")}}>Order now</button>
                  </div>
               </div>
               <div  style={{flexWrap:"wrap-reverse"}}>
                  <div>
                     <h3>We strive to provide the ultimate cruise experience by blending convenience, comfort, and luxury, making every voyage feel special and every guest’s needs easily accessible.</h3>
                  </div>
                  <img src={island02} alt="cruise_img"></img>
               </div>
               <div>
                  <img src={gym} alt="cruise_img"></img>
                  <div>
                     <h3>Whether it’s indulging in catered dining, booking gym sessions, or reserving party venues, CruiseLite simplifies onboard activities, ensuring your journey is as relaxing and enjoyable as possible.</h3>
                     <button style={{backgroundColor:"var(--color0)", color:"var(--color1)",fontFamily:"var(--font3)",fontSize:"1.2rem",fontWeight:"800"}} onClick={()=>{navigate("/gym")}}>Book now</button>
                  </div>
               </div>

            </div>
         </div>


      </div>
   );
}

export default Home; 