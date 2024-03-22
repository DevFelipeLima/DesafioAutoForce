import React from "react";
import { AiOutlineArrowUp, AiOutlineExport } from "react-icons/ai";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

function Footer() {
  return (
    <div className="Footer">
      <div className="ButtonUp">
        <span onClick={scrollToTop}>
          <AiOutlineArrowUp style={{ marginTop: 8, fontSize: 36 }} />
        </span>
      </div>
      <div className="FooterHeader">
        <div className="Footer-logo">
          <img style={{ marginTop: 36 }} src="/namewhite.png" alt="logo" />
        </div>
        <div className="Footer-socialM">
          <span
            style={{
              color: "#ffff",
              fontSize: 34,
              marginTop: 44,
              marginRight: 24,
            }}
          >
            SIGA-NOS:
          </span>
          <img style={{ marginTop: 36 }} src="/logos.png" alt="logo" />
        </div>
      </div>
      <div className="DividerW" />
      <div className="Footer-address">
        <span>
          <strong>Razão Social:</strong> AUTO FORCE PLATAFORMA DE MARKETING
          DIGITAL LTDA
        </span>
        <span>
          <strong>CNPJ:</strong> 22.588.947/0001-06
        </span>
        <div>
          <span>
            <strong>Endereço Matriz:</strong> Av. Prudente de Morais, 3966,
            Lagoa Nova. Natal/RN – CEP 59056-200
          </span>
          <span style={{ textDecoration: "underline", marginLeft: 36 }}>
            Ver mapa <AiOutlineExport style={{ fontSize: 14 }} />
          </span>
        </div>
      </div>
      <div className="DividerW" />
      <div className="FooterEnd">
        <img
          height={35}
          style={{ marginTop: 20 }}
          src="/logowhite.png"
          alt="logo"
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 20,
          }}
        >
          <span>
            © Copyright 2021 - AutoForce - Todos os direitos reservados
          </span>
          <span style={{ textAlign: "end" }}>
            Confira a nossa{" "}
            <a style={{ textDecoration: "underline" }}>
              Politica de privacidade.
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
