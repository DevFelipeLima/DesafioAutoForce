import React from "react";
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="NavBar-logo">
        <img src="/logoname.svg" alt="logo" />
        <span className="dividerLogo" />
        <img src="/logo.svg" alt="logo" />
      </div>
      <div className="NavBar-links">
        <ul>
          <li>
            <a style={{ backgroundColor: "#0066ff" }} href="/">
              <AiOutlinePhone style={{ margin: "0 8 0 8" }} />
              LIGUE AGORA
            </a>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=551199999999"
              style={{ backgroundColor: "#29bf12" }}
            >
              <AiOutlineWhatsApp style={{ margin: "0 8 0 8" }} />
              WHATSAPP
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
