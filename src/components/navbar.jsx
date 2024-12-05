import { useNavigate } from "react-router-dom";

function Nav() {

    const navigate = useNavigate();

 function menu_icon_clicked(){
   const menu_con = document.querySelector(".menu_con");
   menu_con.style.display = menu_con.style.display === "flex" ? "none" : "flex";

   const bar1 = document.querySelector(".bar1");
   const bar2 = document.querySelector(".bar2");
   const bar3 = document.querySelector(".bar3");
  
   bar1.style.transform = menu_con.style.display === "flex" ? "rotate(45deg)" : "rotate(0deg)";
   bar2.style.transform = menu_con.style.display === "flex" ? "rotate(-45deg)" : "rotate(0deg)";
   bar3.style.transform = menu_con.style.display === "flex" ? "rotate(45deg)" : "rotate(0deg)";

 }



    return (
        <nav>
            <div id="nav_con">
              <h1 id="logo" onClick={()=>navigate("/CruisElite")} style={{cursor:"pointer"}}>CruisElite</h1>
            <div id="menu_icon" onClick={menu_icon_clicked}>
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
            </div>  
            </div>
            <div className="menu_con" >
                <h4 onClick={()=>navigate("/CruisElite")}>HOME</h4>
                <details>
                    <summary>SERVICES</summary>
                    <h4 onClick={()=>navigate("/gym")}>GYM</h4>
                    <h4 onClick={()=>navigate("/food")}>ORDER FOOD</h4>
                    <h4 onClick={()=>navigate("/ticket_book")}>THEATER</h4>
                    <h4 onClick={()=>navigate("/saloon")}>BEAUTY SALOON</h4>
                </details>
                <h4 onClick={()=>navigate("/")}>CONTACT</h4>

            </div>
        </nav>
    )
}

export default Nav; 