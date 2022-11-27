import React from "react";

const Child = ({ text, handleParent }) => {
  const fromChild = "from child";

  return (
    <div className="item">
      Child
      <p>{text}</p>
      <button onClick={() => handleParent(fromChild)}>
        Sending data to Parent
      </button>
    </div>
  );
};

export default Child;
