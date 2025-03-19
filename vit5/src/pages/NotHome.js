import React from "react";
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";

const NotHome = () => {
    console.log("NotHome component is loading!");
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");

    useEffect(() => {
        if (count < 0) {
          setCount((count) => 0);
        }
        else if (count > 5) {
          setMessage("Count is greater than 5");
        }
        else {
          setMessage("");
        }
      }, [count]);
    
    return (
        <div>   
        <h1>Not Home</h1>
            <div>
                <button onClick={() => setCount((count) => count + 1)}>
                increase
                </button>
                <button onClick={() => setCount((count) => count - 1)}>
                decrease
                </button>
                <h2>{count}</h2>
            {message}
            </div>
        </div>
    );
}

export default NotHome;