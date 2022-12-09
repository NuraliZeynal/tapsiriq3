import React, { Component } from "react";
import Email from "./Email";
import Ad from "./Ad";
import Adress from "./Adres";
import PersonalInfo from "./PersonalInfo";

class Profil extends Component {
  render() {
    return (
      <div className="Profil">
        <Ad title="Nurali Zeynalov" />
        <Email title="nuralizeynalli20@gmail.com" />
        <Adress title="Xirdalan" />
        <PersonalInfo age={20} specialty="ITIF" />
      </div>
    );
  }
}
export default Profil;
