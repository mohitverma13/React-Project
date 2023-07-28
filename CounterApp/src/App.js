// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const[count,setCount]=useState(0);
  function decreaseHandler(){
    setCount(count-1);
  }
  function increaseHandler(){
    setCount(count+1);
  }
  function resetHandler(){
    setCount(0);
  }
  return(
    <div className="w-[100vw] h-[100vh] flex flex-col justify-center  gap-10 items-center bg-[#252525] ">
      <div className="text-[#000000] font-medium text-2xl" >Increment And Decrement</div>


      <div className="bg-white flex justify-center gap-12 py-3 rounded-[10px] text-[25px] text-[#344152] ">
        <button onClick={decreaseHandler} className='border-r-2 text-center w-20 border-[orange] text-5xl'>-</button>
        <div>{count}</div>
        <button onClick={increaseHandler} className='border-l-2 text-center w-20 border-[orange] text-5xl'>+</button>
      </div>


      <button onClick={resetHandler} className="text-[#0398d4] font-medium  bg-[#003ace] py-2 px-5 rounded-[10px] text-lg" >Reset</button>
    </div>
  );
}

export default App;
