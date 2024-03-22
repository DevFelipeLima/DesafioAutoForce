import React from "react";

function Home() {
  return (
    <div className="Home">
      <h1>BMW Série 4 Cabrio</h1>
      <div className="Description">
        <span className="Introduction">
          Descubra o BMW Série 4 Cabrio <br />
          Cliente On-line tem Condições Especiais e aqui na Dealer BMW!
        </span>
        <span classname="Pricing">
          A partir de <strong>R$ 179.950</strong>
        </span>
      </div>
      <div className="Presentation">
        <img height={330} src="/imagem1.png" alt="BMW" />
        <div style={{ marginLeft: 250 }}>
          <span style={{ fontWeight: "bold", fontSize: "24px" }}>
            Destaques
          </span>
          <div className="Highlights">
            <div className="InfoContainer">
              <img
                style={{ marginRight: 25 }}
                height={32}
                src="/consumo.png"
                alt="cilindrada"
              />
              <div className="info">
                <span>Consumo</span>
                <span style={{ color: "#0066ff", fontWeight: "bold" }}>
                  14,7km/l
                </span>
              </div>
            </div>
            <div className="InfoContainer">
              <img
                style={{ marginRight: 25 }}
                height={32}
                src="/cilindrada.png"
                alt="cilindrada"
              />
              <div className="info">
                <span>Cilindrada</span>
                <span style={{ color: "#0066ff", fontWeight: "bold" }}>
                  999 cm3
                </span>
              </div>
            </div>
            <div className="InfoContainer">
              <img
                style={{ marginRight: 25 }}
                height={32}
                src="/potencia.png"
                alt="cilindrada"
              />
              <div className="info">
                <span>Potencia</span>
                <span style={{ color: "#0066ff", fontWeight: "bold" }}>
                  75 cv
                </span>
              </div>
            </div>
            <div className="InfoContainer">
              <img
                style={{ marginRight: 25 }}
                height={32}
                src="/velocidade.png"
                alt="cilindrada"
              />
              <div className="info">
                <span>Velocidade Máx</span>
                <span style={{ color: "#0066ff", fontWeight: "bold" }}>
                  154km/h
                </span>
              </div>
            </div>
          </div>
          <span className="button">TENHO INTERESSE</span>
        </div>
      </div>
      <div className="Divider" />
      <div className="Presentation-p2">
        <h1>A vida é melhor quando compartilhada. BMW Série 4 Cabrio</h1>
        <span style={{ marginLeft: 250 }}>
          A performance irradia de cada ângulo do design inovador do BMW Série 4
          Cabrio. Começando pela dianteira, que conta com para-choque clássico
          dos modelos BMW. Ao correr os olhos pelo design, nota-se imediatamente
          o teto inclinado e a linha do ombro marcante, que equilibra o centro
          de gravidade do carro. Voltando-se para as laterais, são os robustos
          arcos de 10 mm e as incomuns rodas de 21 polegadas que chamam a
          atenção. Ao chegar na traseira do BMW Série 4 Cabrio, a força do
          design continua surpreendendo. O para-choque com difusão clássica dos
          modelos BMW, as lâminas horizontais e teto com spoiler ganham um toque
          a mais de amplitude devido ao vidro traseiro levemente rebaixado.
        </span>
      </div>
      <div className="DividerS" />
    </div>
  );
}

export default Home;
