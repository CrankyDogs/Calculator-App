// calculator-app-FrontendMentorChallenge

//UI
import { useState } from 'react';
import './App.css';

export default function App() {
  let result = "";
  const [selected, setIsSelected]=useState(() => {
    const val = localStorage.getItem("theme");
    return val || "1";
  });
  const [operator, setOperator]=useState("");
  const [currentOperand, setCurrentOperand]=useState("");
  const [prevOperand, setPrevOperand] = useState("");

  const handleTheme = ( e) => {
    const id = e.target.id;
    localStorage.setItem("theme",id);
    console.log(id);
    setIsSelected(id);
    
  }


  function handleDel(){
    setCurrentOperand(currentOperand.toString().slice(0, -1));
  }

  function handleEql(){
    
    if(operator === "+"){
      result = parseFloat(prevOperand) + parseFloat(currentOperand);
    }else if(operator === "-"){
      result = parseFloat(prevOperand) - parseFloat(currentOperand);
    }else if(operator === "/"){
      result = parseFloat(prevOperand) / parseFloat(currentOperand);
    }else if(operator === "x"){
      result = parseFloat(prevOperand) * parseFloat(currentOperand);
    }
    setCurrentOperand(result);
    
  }

  function handleReset(){
    setCurrentOperand("");
    setPrevOperand("");
    setOperator("");
    console.log(currentOperand);
  }


  return(
    <>
    <div className='App'  data-theme={selected} >
    <div className="calc-layout">
      <div className="theme-layout">
      <h1 className='calc' >Calc</h1>
        <h3>Theme</h3>
        <div className="theme-select">
        <div className='theme-label'>

          <label htmlFor="1">1</label>
          <label htmlFor="2">2</label>
          <label htmlFor="3">3</label>
        </div>
        <div className='theme-selectors'>

          <input onChange={ handleTheme } className='radios' type="radio" id="1" name='ff' checked={selected==="1"} />
          <input onChange={handleTheme} type="radio" className='radios' id="2" name='ff' checked={selected === "2"} />
          <input onChange={handleTheme} type="radio" className='radios' id="3" name='ff' checked={selected=="3"}/>
        </div>
        </div>
      </div>
      <div className="output-screen">
        <div className='prevOperand'>
          {prevOperand}
          {operator}
          {/* {operator != "" && currentOperand + ""} */}
        </div >
        {/* {currentOperand != '' && <DisplayNum/>} */}
        {/* <DisplayNum/> */}
        <div className='currentOperand'>{currentOperand}</div>
      </div>
      <div className="calc-btns">
        <button className="btn-num" onClick={() => setCurrentOperand(currentOperand + "7")} >7</button>
        <button className="btn-num" onClick={() => setCurrentOperand(currentOperand + "8")}>8</button>
        <button className="btn-num" onClick={() => setCurrentOperand(currentOperand + "9")}>9</button>
        <button className="delete" onClick={handleDel} >DEL</button>
        <button className="btn-num" onClick={() => setCurrentOperand(currentOperand + "4")}>4</button>
        <button className="btn-num" onClick={() => setCurrentOperand(currentOperand + "5")}>5</button>
        <button className="btn-num" onClick={() => setCurrentOperand(currentOperand + "6")}>6</button>
        <button className="btn-op" onClick={() => {
          if (prevOperand === ""){
            setPrevOperand(currentOperand);
            setCurrentOperand("");
            setOperator("+");
          }else {
            handleEql();
            setPrevOperand(result);
            setCurrentOperand("");
            setOperator("+");
          }
          }}>+</button>
        <button className="btn-num" onClick={() => setCurrentOperand(currentOperand + "1")}>1</button>
        <button className="btn-num" onClick={() => setCurrentOperand(currentOperand + "2")}>2</button>
        <button className="btn-num" onClick={() => setCurrentOperand(currentOperand + "3")}>3</button>
        <button className="btn-op" onClick={() => {
          if (prevOperand === ""){
            setPrevOperand(currentOperand);
            setCurrentOperand("");
            setOperator("-");
          }else{
            handleEql();
            setPrevOperand(result);
            setCurrentOperand("");
            setOperator("-");
          }
        }}>-</button>
        <button className="btn-num" onClick={() => setCurrentOperand(currentOperand + ".")}>.</button>
        <button className="btn-num" onClick={() => setCurrentOperand(currentOperand + "0")}>0</button>
        <button className="btn-op" onClick={() => {
          if (prevOperand === ""){
            setPrevOperand(currentOperand);
            setCurrentOperand("");
            setOperator("/");
          }else{
            handleEql();
            setPrevOperand(result);
            setCurrentOperand("");
            setOperator("/");}
          }}>/</button>
        <button className="btn-op" onClick={() => {
          if (prevOperand === ""){
            setPrevOperand(currentOperand);
            setCurrentOperand("");
            setOperator("x");}
          else{
            handleEql();
            setPrevOperand(result);
            setCurrentOperand("");
            setOperator("x");
          }
          }}>x</button>
        <div className="reset">
        <button onClick={handleReset} className="btn-rst">Reset</button>
        </div>
        <div className="equal">
        <button className="btn-eq" onClick={() => {
          // {handleEql}
          handleEql();
          setPrevOperand("");
    setOperator("");
          }}>=</button>
        </div>
      </div>


    </div>
    </div>
    </>
  )
};

// function DisplayNum({currentOperand}){
//   return(
//     <div className='currentOperand'>
//       {currentOperand}
//     </div>
//   )
// }
