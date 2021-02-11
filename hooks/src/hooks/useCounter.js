import { useState } from "react";

const useConter = (initialValue = 100) => {
  const [count, setCount] = useState(initialValue);

  const inc = () => {
    setCount(count + 1);
  };

  const dec = () => {
    setCount(count - 1);
  };

  return [count, inc, dec];
};

export default useConter;
