import { useState } from "react";


const UseStateExample = () => {
  const [counter,setCouter]=useState(0)
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center">{counter}</h1>
    </div>
  );
};

export default UseStateExample;
