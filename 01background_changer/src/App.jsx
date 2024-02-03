import { useState } from "react";

function App() {
  const [color, setColor] = useState("grey");

function redUpdate(){
  setColor("red")
}

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-4 shadow-xl bg-white px-3 py-2 rounded-3xl ">
            <button
              onClick={redUpdate
                
              //   () => {
              //   setColor("red");
              // }
            
            }
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-700"
            >
              Red
            </button>
            <button
              onClick={() => {
                setColor("orange");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-orange-700"
            >
              Orange
            </button>
            <button
              onClick={() => {
                setColor("yellow");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-700"
            >
              Yellow
            </button>
            <button
              onClick={() => {
                setColor("green");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-700"
            >
              Green
            </button>
            <button
              onClick={() => {
                setColor("blue");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-700"
            >
              Blue
            </button>
            <button
              onClick={() => {
                setColor("indigo");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-indigo-700"
            >
              Indigo
            </button>
            <button
              onClick={() => {
                setColor("violet");
              }}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg bg-violet-700 "
            >
              Violet
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
