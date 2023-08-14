import './App.css';
import { useState } from 'react';

function App() {

  const [input, setInput] = useState('');

  const handlebuttonclick = (value) =>{
    
    if(value==='AC') {
      setInput('');
    }
    
    else if(value==='DEL'){
      setInput(input.slice(0,-1));
    }

    else if(value === '=' ){
      try{
        setInput(eval(input).toString());
      }
      catch(error){
        setInput('Error');  
      }
    }

    else{
      setInput((preValue) => preValue + value)
    }


  }

  return (
    <div className="calculator-grid">
      <div className="output">
        {/* <div className="prev-operand"> {input}</div> */}
        <div className="curr-operand">{input} </div>
      </div>
      <button className="span-two" onClick={()=>handlebuttonclick('AC')}>AC</button>
      <button onClick={()=>handlebuttonclick('DEL')}>DEL</button>
      <button onClick={()=>handlebuttonclick('/')}>/</button>
      <button onClick={()=>handlebuttonclick('1')}>1</button>
      <button onClick={()=>handlebuttonclick('2')}>2</button>
      <button onClick={()=>handlebuttonclick('3')}>3</button>
      <button onClick={()=>handlebuttonclick('*')}>*</button>
      <button onClick={()=>handlebuttonclick('4')}>4</button>
      <button onClick={()=>handlebuttonclick('5')}>5</button>
      <button onClick={()=>handlebuttonclick('6')}>6</button>
      <button onClick={()=>handlebuttonclick('+')}>+</button>
      <button onClick={()=>handlebuttonclick('7')}>7</button>
      <button onClick={()=>handlebuttonclick('8')}>8</button>
      <button onClick={()=>handlebuttonclick('9')}>9</button>
      <button onClick={()=>handlebuttonclick('-')}>-</button>
      <button onClick={()=>handlebuttonclick('0')}>0</button>
      <button onClick={()=>handlebuttonclick('.')}>.</button>
      <button className="span-two" onClick={()=>handlebuttonclick('=')}>=</button>

    </div>
  );
}

export default App;
