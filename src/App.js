import { useState } from "react";

import * as math from "mathjs";

import "./styles/global.scss";
import "./styles/clearbutton.scss";

import Display from "./components/Display";
import BtnTotal from "./components/TotalButton";
import NumberButton from "./components/NumberButton";
import ClearButton from "./components/ClearButton";
import BtnOperacoes from "./components/ButtonOperacoes";

function App() {
  const [numDefault, setNumDefault] = useState("0");
  const [valorInput, setValorInput] = useState("");
  const [valorResultado, setValorResultado] = useState("");
  

  // método para atualizar o state do valor do input
  const addToInput = (val) => {
    setNumDefault("")
    setValorInput((valorInput) => [...valorInput, val + ""]);
  };

  // Operações matemáticas
  const calculaTotal = () => {
    const input = valorInput.join(""); // remove as aspas
    setValorResultado(math.evaluate(input));
    limparOps()
  };

  // Limpa os números do display
  const limparDisplay = () => {
    setValorInput("");
    setValorResultado("");
    setNumDefault("0")
  };

  // limpa apenas os operadores
  const limparOps = () => {
    setValorInput("")
  }
  

  return (
    <div id="calculadora">
      <section className="painelResultadoContas">
        <div id="result">
          <ClearButton symbol="x" handleClick={limparDisplay} />
          <Display numDefault={numDefault} input={valorInput} res={valorResultado} />
        </div>
      </section>

      <section className="teclado">
        {/* handleClick = propriedade do componenete Button responsável por recuperar o valor do simbolo e mandar para o parâmetro 'val' do método addToInput */}
        <NumberButton symbol= "1" handleClick={addToInput} />
        <NumberButton symbol= "2" handleClick={addToInput} />
        <NumberButton symbol= "3" handleClick={addToInput} />
        <BtnOperacoes symbol="+" handleClick={addToInput} />
        <NumberButton symbol= "4" handleClick={addToInput} />
        <NumberButton symbol= "5" handleClick={addToInput} />
        <NumberButton symbol= "6" handleClick={addToInput} />
        <BtnOperacoes symbol="-" handleClick={addToInput} />
        <NumberButton symbol= "7" handleClick={addToInput} />
        <NumberButton symbol= "8" handleClick={addToInput} />
        <NumberButton symbol= "9" handleClick={addToInput} />
        <BtnOperacoes symbol="/" handleClick={addToInput} />
        <NumberButton symbol= "0" handleClick={addToInput} />
        <NumberButton symbol="." handleClick={addToInput} />
        <BtnTotal symbol="=" handleClick={calculaTotal} />
        <BtnOperacoes symbol="*" handleClick={addToInput} />
        {/* Tive de usar * ao invés de X pois a biblioteca mathjs não estava reconhecendo X como simbolo valido */}
      </section>
    </div>
  );
}

export default App;
