import { useState } from 'react'
import './App.css'

function App() {
  let [numbers, setNumbers] = useState(0);
  let [invert, setInvert] = useState(false);
  const handler = (event) => {
    setNumbers(event.target.value);
  }
  const resetNumbers = () => {
    setNumbers(0);
  }
  const inverted = () => {
    setInvert(cur => !cur);
    setNumbers(0);
  }
  console.log("rendered");
  console.log(`numbers = ${numbers} , invert = ${invert}`);
  return (
    <>
      <h1>거리 Converter</h1>
      <label htmlFor="km">KM</label>
      <input type="number" step="10" min="0" value={invert ? Math.round(numbers*1.609) : numbers} id="km" onChange={handler} disabled={invert} />
      <label htmlFor="mile">Mile</label>
      <input type="text" id="mile" placeholder="마일" value={invert ? numbers : Math.round(numbers/1.609)} onChange={handler} disabled={!invert} />
      <button onClick={resetNumbers}>Reset</button>
      <button onClick={inverted}>{invert ? "mile을 km로" : "km를 mile로" }</button>


      <h1>길이 Converter</h1>
      <label htmlFor="cm">CM</label>
      <input type="number" step="10" min="0" value={invert ? Math.round(numbers*2.54) : numbers} id="cm" onChange={handler} disabled={invert} />
      <label htmlFor="inch">INCH</label>
      <input type="text" id="inch" placeholder="inch" value={invert ? numbers : Math.round(numbers/2.54)} onChange={handler} disabled={!invert} />
      <button onClick={resetNumbers}>Reset</button>
      <button onClick={inverted}>{invert ? "inch를 cm로" : "cm를 inch로" }</button>
    </>
  )
}

export default App
