import React, {useState} from "react";
import "./test.css";

function Test() {
  console.log('실행')

  const [a, b] = useState(1)

  return (
    <>
      <div>Hello world</div>
      <button className="button" onClick={() => {b(a + 1)}}>고마워 쳇</button>
    </>
  );
}

export default Test;