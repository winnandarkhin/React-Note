import { useState } from 'react'
function CalculatorButton(props) {
  return <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>
}

export default function Calculator() {

  const [calc, setCalc] = useState({
    current: "0",
    total: "0",
    isInitial: true,
    preOp: ""
  })

  function handleNumber(value) {
    let newValue = value

    if (!calc.isInitial) {
      newValue = calc.current + value;
    }

    setCalc({
      current: newValue,
      total: calc.total,
      isInitial: false,
      preOp: calc.preOp
    })
  }

  function handleOperator(value) {
    const total = doCalculation()
    setCalc({
      current: total.toString(),
      total: total.toString(),
      isInitial: true,
      preOp: value
    })
  }

  function doCalculation() {
    let total = parseInt(calc.total)
    console.log("calc", calc)
    switch (calc.preOp) {
      case '+':
        total += parseInt(calc.current)
        break;
      case '-':
        total -= parseInt(calc.current)
        break;
      case '*':
        total *= parseInt(calc.current)
        break;
      case '/':
        total /= parseInt(calc.current)
        break;
      default:
        total = parseInt(calc.current)
    }

    return total
  }

  function handleClear() {
    setCalc({
      current: "0",
      total: "0",
      isInitial: true,
      preOp: ""
    })
  }

  function handleEquals() {
    let total = doCalculation()
    setCalc({
      current: total.toString(),
      total: total.toString(),
      isInitial: true,
      preOp: ""
    })

  }

  function renderDisplay() {
    return calc.current;
  }

  return <div className="calculator">
    <div className="display">
      {renderDisplay()}
    </div>

    <CalculatorButton value="7" onClick={handleNumber} />
    <CalculatorButton value="8" onClick={handleNumber} />
    <CalculatorButton value="9" onClick={handleNumber} />
    <CalculatorButton value="/" className="operator" onClick={handleOperator} />

    <CalculatorButton value="4" onClick={handleNumber} />
    <CalculatorButton value="5" onClick={handleNumber} />
    <CalculatorButton value="6" onClick={handleNumber} />
    <CalculatorButton value="*" className="operator" onClick={handleOperator} />

    <CalculatorButton value="1" onClick={handleNumber} />
    <CalculatorButton value="2" onClick={handleNumber} />
    <CalculatorButton value="3" onClick={handleNumber} />
    <CalculatorButton value="-" className="operator" onClick={handleOperator} />

    <CalculatorButton value="C" onClick={handleClear} />
    <CalculatorButton value="0" onClick={handleNumber} />
    <CalculatorButton value="=" onClick={handleEquals} />
    <CalculatorButton value="+" className="operator" onClick={handleOperator} />
  </div>
}

