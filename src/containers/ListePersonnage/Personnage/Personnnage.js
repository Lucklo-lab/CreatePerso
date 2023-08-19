import React from "react";
import imagePlayer1 from "../../../asset/images/persos/player1.png";
import imagePlayer2 from "../../../asset/images/persos/player2.png";
import imagePlayer3 from "../../../asset/images/persos/player3.png";
import imgArc from "../../../asset/images/armes/arc.png";
import imgEpee from "../../../asset/images/armes/epee.png";
import imgFleau from "../../../asset/images/armes/fleau.png";
import imgHache from "../../../asset/images/armes/hache.png";




const personnage = (props) =>{
    let imgPerso = "";
    if(props.image === 1) imgPerso = imagePlayer1;
    else if(props.image === 2) imgPerso = imagePlayer2;
    else if(props.image === 3) imgPerso = imagePlayer3;

    let imgArme = "";
    if(props.arme === "arc") imgArme = imgArc;
    else if(props.arme === "epee") imgArme = imgEpee;
    else if(props.arme === "fleau") imgArme = imgFleau;
    else if(props.arme === "hache") imgArme = imgHache;



    return (
    <div className="row no-gutters">
      <div className="col-6">
        <img src={imgPerso} alt="personnage" />
      </div>
      <div className="col-6">
        Force : {props.force} <br />
        Agilite : {props.agilite} <br />
        Intelligence : {props.intelligence} 
        <img src={imgArme} alt="arme" />
      </div>
    </div>
    );
};

export default personnage;