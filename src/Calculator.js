import { useState } from "react"
import Buttons from "./Buttons"

function Calculator() {
  
  var [value, setValue] = useState("");
  const [clickEqual, setclickEqual] = useState(false);
  
 return (
    <div className="App">
      <div className='calculator-container'>
          <div className="display-container">
            <input type="text" id="display" disabled value={value}/>
          </div>

          <div className="buttons-layout">

              <Buttons id="AC" classname="results" value={value} setValue={setValue}>AC</Buttons>
              <Buttons id="delete" classname="results" value={value} setValue={setValue}>Del</Buttons>
              <Buttons clickEqual={clickEqual} setclickEqual={setclickEqual} id="/" classname="operator" value={value} setValue={setValue}>/</Buttons>

              <Buttons clickEqual={clickEqual} setclickEqual={setclickEqual} id="7" classname="number" value={value} setValue={setValue}>7</Buttons>
              <Buttons clickEqual={clickEqual} setclickEqual={setclickEqual} id="8" classname="number" value={value} setValue={setValue}>8</Buttons>
              <Buttons clickEqual={clickEqual} setclickEqual={setclickEqual} id="9" classname="number" value={value} setValue={setValue}>9</Buttons>
              <Buttons clickEqual={clickEqual} setclickEqual={setclickEqual} id="*" classname="operator" value={value} setValue={setValue}>
              <img className="operator-img" src="./x-regular-60 (1).png" alt="*" />
              </Buttons>

              <Buttons clickEqual={clickEqual} setclickEqual={setclickEqual} id="4" classname="number" value={value} setValue={setValue}>4</Buttons>
              <Buttons clickEqual={clickEqual} setclickEqual={setclickEqual} id="5" classname="number" value={value} setValue={setValue}>5</Buttons>
              <Buttons clickEqual={clickEqual} setclickEqual={setclickEqual} id="6" classname="number" value={value} setValue={setValue}>6</Buttons>
              <Buttons clickEqual={clickEqual} setclickEqual={setclickEqual} id="-" classname="operator" value={value} setValue={setValue}>
              <img className="operator-img" src="./minus-regular-60.png" alt="-" />
              </Buttons>

              <Buttons clickEqual={clickEqual} setclickEqual={setclickEqual} id="1" classname="number" value={value} setValue={setValue}>1</Buttons>
              <Buttons clickEqual={clickEqual} setclickEqual={setclickEqual} id="2" classname="number" value={value} setValue={setValue}>2</Buttons>
              <Buttons clickEqual={clickEqual} setclickEqual={setclickEqual} id="3" classname="number" value={value} setValue={setValue}>3</Buttons>
              <Buttons clickEqual={clickEqual} setclickEqual={setclickEqual} id="+" classname="operator" value={value} setValue={setValue}>
              <img className="operator-img" src="./plus-regular-60.png" alt="+" />
              </Buttons>

              <Buttons clickEqual={clickEqual} setclickEqual={setclickEqual} id="0" classname="number zero" value={value} setValue={setValue}>0</Buttons>
              <Buttons clickEqual={clickEqual} setclickEqual={setclickEqual} id="." classname="number" value={value} setValue={setValue}>.</Buttons>
              <Buttons clickEqual={clickEqual} setclickEqual={setclickEqual} id="=" classname="operator" value={value} setValue={setValue}>=</Buttons>

          </div>
      </div>
      <a className="dev" href="https://github.com/fraancofenoglio/" target="_blank" rel="noreferrer">
        <h2>by Franco Fenoglio</h2>
      </a>
    </div>
  );
}

export default Calculator;
