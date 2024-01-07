import { Dispatch, } from "react";
type TCounter={
  counter:number,
  setCounter:Dispatch<React.SetStateAction<number>>
}

const UseStateExample = ({counter,setCounter}:TCounter) => {
 

 

  return (
    <div className=" h-[100vh] flex items-center justify-center">
      <div className="items-center">
      <h1  className="text-3xl font-bold text-center mb-6">{counter}</h1>

      <button onClick={()=>setCounter((pre)=>pre+1)} className="btn px-5 py-2 bg-green-600 rounded-md  hover:bg-green-700 text-white ">Increment</button>

      <button onClick={()=>setCounter((pre)=>pre-1)} className="btn px-5 py-2 bg-green-600 rounded-md hover:bg-green-700 mx-7 text-white">Decrement</button>

      <button onClick={()=>setCounter(0)} className="btn px-5 py-2 bg-red-500 rounded-md hover:bg-red-600 text-white">Reset</button>
      </div>
    </div>
  );
};

export default UseStateExample;
