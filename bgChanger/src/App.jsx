import { useState } from "react"

function App() {
  const [color, setColor] = useState("lightgrey");

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("orangered")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "orangered"}}
          >Red</button>

          <button 
          onClick={() => setColor("lightgreen")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "lightgreen"}}
          >Green</button>

          <button 
          onClick={() => setColor("lightblue")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "lightblue"}}
          >Blue</button>

          <button 
          onClick={() => setColor("yellow")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>

          <button 
          onClick={() => setColor("violet")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "violet"}}
          >Violet</button>

          <button 
          onClick={() => setColor("orange")} 
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "orange"}}
          >Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
