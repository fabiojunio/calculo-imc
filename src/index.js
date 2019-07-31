import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Cálculo do IMC</h1>
      <div class="container">
        <p class="text">
          Cálculo IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado
          pela Organização Mundial de Saúde para calcular o peso ideal de cada
          pessoa. O índice é calculado da seguinte maneira: divide-se o peso do
          paciente pela sua altura elevada ao quadrado. Diz-se que o indivíduo
          tem peso normal quando o resultado do IMC está entre 18,5 e 24,9. Quer
          descobrir seu IMC? Insira seu peso e sua altura nos campos abaixo e
          compare com os índices da tabela. Importante: siga os exemplos e use
          pontos como separadores.
        </p>
      </div>

      <div class="container">
        <input
          class="input-imc"
          type="number"
          placeholder="Digite sua Altura..."
        />
        <br />
        <input
          class="input-imc"
          type="number"
          placeholder="Digite sua Idade..."
        />
        <br />
        <input
          class="input-imc"
          type="number"
          placeholder="Digite seu Peso..."
        />
        <br />

        <button class="btn-start">Fazer o calculo</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
