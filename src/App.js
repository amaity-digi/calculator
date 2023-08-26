
import './App.css';
import { useState } from 'react';
import BackspaceIcon from '@mui/icons-material/Backspace';
function App() {
  const [result,setResult]= useState('');

  const add=(x,y)=>{
    let sum=x+y;
    return sum;
  }

  const multiple=(x,y)=>{
    let multiplication=x*y;
    return multiplication;
  }

  const divison=(x,y)=>{
    let divided=(x/y);
    return divided;
  }

  const substraction=(x,y)=>{
    let minus=(x-y);
    return minus;
  }

  const handleClick=(e)=>{
    setResult(result.concat(e.target.value));
  }

  const handleClear=()=>{
     setResult('');
  }

  const handleBackspace=()=>{
    setResult(result.slice(0, result.length-1));// or use just -1
  }

  const handleCalculate=()=>{
    try{
      setResult(eval(result).toString()); 
    }catch(err){
      setResult('Error');
    }
   
  }

  return (
    <div className="App">
     <h2>Calculator</h2>
     <ul>
      <li>Sum of two number is: {add(40,9)}</li>
      <li>multiplication of two num:{multiple(4,9)}</li>
      <li>Division of two number is: {divison(100,4)}</li>
      <li>Substrat of two number is:{substraction(80,4)}</li>
     </ul>

      <div className='container'>
         <form>
             <input type='text' value={result}></input>
         </form>
      </div>
        
        <div className='keypad'>
          <button onClick={handleClear} id='clear'>C</button>
          <button onClick={handleBackspace} id='backSpace' ><BackspaceIcon/></button>
          <button value='/' onClick={handleClick}>&divide;</button>
          <button value='7' onClick={handleClick}>7</button>
          <button value='8' onClick={handleClick}>8</button>
          <button value='9' onClick={handleClick}>9</button>
          <button value='*' onClick={handleClick}>&times;</button>
          <button value='4' onClick={handleClick}>4</button>
          <button value='5' onClick={handleClick}>5</button>
          <button value='6' onClick={handleClick}>6</button>
          <button value='-' onClick={handleClick}>&ndash;</button>
          <button value='1' onClick={handleClick}>1</button>
          <button value='2' onClick={handleClick}>2</button>
          <button value='3' onClick={handleClick}>3</button>
          <button value='+' onClick={handleClick}>+</button>
          <button value='0' onClick={handleClick}>0</button>
          <button value='.' onClick={handleClick}>.</button>
          <button value='' onClick={handleCalculate} id='result'>=</button>
        </div>
    </div>
  );
}

export default App;
