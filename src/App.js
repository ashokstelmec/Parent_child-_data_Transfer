import { useState } from "react";
import Child from "./components/Child";
import "./App.css";

function App() {
  const [childText, setChildText] = useState("");

  const parentData = "Content from Parent";

  const handleClick = (text) => {
    setChildText(text);
  };

  return (
    <div className="parent">
      <Child text={parentData} handleParent={handleClick} />
      {childText}
    </div>
  );
}
// We pass data from parent to child through ONLY PROPS
export default App;
