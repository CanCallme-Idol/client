import React from "react";
import { ReactComponent as Logo } from "../images/logo_INEX_white 2.svg";

export default function Footer() {
  return (
    <div className="ai-footer">
      <div className="flex-box">
        <Logo />
        <div>
          <div className="logo-font-botom">INEX</div>
          <div className="logo-font-small-botom">IDOL</div>
        </div>
      </div>
      <div>
        <div>개인정보처리방침</div>
        <div className="text-wrapper-3">
          © 2023. INEX IDOL, INEX IDOLlab. All rights reserved.
        </div>
      </div>
    </div>
  );
}
