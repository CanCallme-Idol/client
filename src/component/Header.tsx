import React from "react";
import { ReactComponent as Language } from "../images/Ellipse 7.svg";
import { ReactComponent as Logo } from "../images/logo_INEX_white 2.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header-in">
        <div className="flex-box">
          <Logo />
          <div>
            <div className="logo-font">INEX</div>
            <div className="logo-font-small">IDOL</div>
          </div>
        </div>
        <div className="language">
          <div>KR-EN</div>
        </div>
        <div className="language-circle">
          <Language />
        </div>
      </div>
    </div>
  );
}
