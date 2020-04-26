import React from "react";
import Main from "./Layout/Main";
import FetchBoard from "./components/FetchBoard";
import ListProvince from "./components/ListProvince";
import "./App.css";
function App() {
  return (
    <div>
  
      <h1 className="text-4xl font-bold text-center text-blue-500">
        Hello Tailwind!
      </h1>
      <Main />
      {/* <FetchBoard api="https://covid19.th-stat.com/api/open/cases/sum" list={ListProvince}/> */}
    </div>
  );
}

export default App;
