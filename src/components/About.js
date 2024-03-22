import React from "react";

function About() {
  const youtubeID = "cFyrTEYyq64";
  return (
    <div className="About">
      <span style={{ marginBottom: 24 }}>Conheça o BMW Série 4 Cabrio</span>
      <div>
        <iframe
          className="video"
          title="Youtube player"
          sandbox="allow-same-origin allow-forms allow-popups allow-scripts allow-presentation"
          src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}
        ></iframe>
      </div>
      <span className="LegalText">
        <a>Texto Legal:</a>
        <p>
          Texto Legal: Virtus 1.0, 4 portas (cód. BZ23B3), ano/modelo 18/18 à
          vista a partir de R$ 73490 ou financiado com entrada de R$ 44094 (60%)
          e mais 24 prestações mensais de R$ 1286. Taxa de juros: 0% a.m. e 0%
          a.a. Total da operação: R$ 74958. CET máximo para esta operação:
          04,75%% a.a. Condições válidas para financiamento pelo Banco
          Volkswagen. Oferta válida exclusivamente para a cidade de Natal / RN,
          no período de 30/09/2018 a 31/10/2018 para veículos com pintura
          sólida.
        </p>
      </span>
    </div>
  );
}

export default About;
