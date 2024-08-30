import { useState } from "react"


function App() {

  const [color, setColor] = useState("olive")
  return (
    <div
      className="w-full 
    h-screen duration-200"
      style={{
        backgroundColor: color
      }}>

      <div
        className="fixed flex 
      flex-wrap justify-center 
      bottom-12 inset-x-0 px-2">
        <div
          className="flex 
        flex-wrap justify-center 
        gap-3 shadow-lg bg-white 
        px-3 py-2 rounded-3xl">

          <button
            className="outline-none 
            px-4 py-1 rounded-full 
            text-white shadow-lg"
            style={{ background: "red" }}
            onClick={()=>setColor("red")}
          >red</button>

          <button
            className="outline-none 
            px-4 py-1 rounded-full 
            text-white shadow-lg"
            style={{ background: "green" }}
            onClick={()=>setColor("green")}
          >Green</button>

          <button
            className="outline-none 
            px-4 py-1 rounded-full 
            text-white shadow-lg"
            style={{ background: "olive" }}
            onClick={()=>setColor("olive")}
          >Olive</button>

          <button
            className="outline-none 
            px-4 py-1 rounded-full 
            text-white shadow-lg"
            style={{ background: "gray" }}
            onClick={()=>setColor("gray")}
          >Gray</button>

          <button
            className="outline-none 
            px-4 py-1 rounded-full 
            text-black shadow-lg"
            style={{ background: "yellow" }}
            onClick={()=>setColor("yellow")}
          >Yellow</button>

          <button
            className="outline-none 
            px-4 py-1 rounded-full 
            text-black shadow-lg"
            style={{ background: "pink" }}
            onClick={()=>setColor("pink")}
          >Pink</button>

          <button
            className="outline-none 
            px-4 py-1 rounded-full 
            text-white shadow-lg"
            style={{ background: "purple" }}
            onClick={()=>setColor("purple")}
          >Purple</button>

          <button
            className="outline-none 
            px-4 py-1 rounded-full 
            text-black shadow-lg"
            style={{ background: "lavender" }}
            onClick={()=>setColor("lavender")}
          >Lavender</button>

          <button
            className="outline-none 
            px-4 py-1 rounded-full 
            text-black shadow-lg"
            style={{ background: "white" }}
            onClick={()=>setColor("white")}
          >White</button>

          <button
            className="outline-none 
            px-4 py-1 rounded-full 
            text-white shadow-lg"
            style={{ background: "black" }}
            onClick={()=>setColor("black")}
          >Black</button>

        </div>
      </div>
    </div>
  )
}

export default App
