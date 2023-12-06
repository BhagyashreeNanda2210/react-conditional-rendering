import React from "react";
import Login from "./Login";
var isLoggedIn = true;


// const curentTime = new Date().getHours();
// console.log(curentTime);

function App() {
  return <div className="container">
    
      {isLoggedIn === true ? <h1>Hello</h1> : <Login />}

      {/* {curentTime > 12 && <h1>Why are you still working?</h1>} */}
    </div>
}

export default App;
