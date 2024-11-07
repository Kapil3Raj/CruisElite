import crusie01 from "../images/crusie_&_island/crusie01.png";
import crusie02 from "../images/crusie_&_island/crusie02.jpeg";
import crusie03 from "../images/crusie_&_island/crusie03.jpeg";
import crusie04 from "../images/crusie_&_island/crusie04.jpeg";
import island03 from "../images/crusie_&_island/island03.png";
import island02 from "../images/crusie_&_island/island02.png";
import island01 from "../images/crusie_&_island/island01.png";
import gym from "../images/gym.jpeg";
import partyhall01 from "../images/partyhall01.jpeg"
import cruiseroom from "../images/crusie_&_island/crusieroom.jpeg"




function Home() {
   return (
      <div id="home">
         <div id="herosec">
            <span></span>
            <span></span>
            <span></span>
            <div class="img-container1">
               <img src={cruiseroom} />
            </div>
            <div class="img-container2">
               <img src={crusie01} />
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
                  <img src={crusie04}></img>
                  <div>
                     <h3>Our platform is dedicated to enhancing onboard life, enabling travelers to explore a variety of services—from reserving spa treatments and movie tickets to ordering meals, all with ease.</h3>
                  </div>
               </div>
               <div  style={{flexWrap:"wrap-reverse"}}>
                  <div>
                     <h3>We strive to provide the ultimate cruise experience by blending convenience, comfort, and luxury, making every voyage feel special and every guest’s needs easily accessible.</h3>
                  </div>
                  <img src={island02}></img>
               </div>
               <div>
                  <img src={gym}></img>
                  <div>
                     <h3>Whether it’s indulging in catered dining, booking gym sessions, or reserving party venues, CruiseLite simplifies onboard activities, ensuring your journey is as relaxing and enjoyable as possible.</h3>
                  </div>
               </div>

            </div>
         </div>


      </div>
   );
}

export default Home; 