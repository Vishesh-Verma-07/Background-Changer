import { useState } from "react"
import './App.css'


function App() {
  const [color, setColor] = useState("olive")


  //for first
  const [isActive1, setIsActive1] = useState(false)
  
  const ToggleClass1 = ()=>{
    setIsActive1(true);
    
  }
  setTimeout(() => {
    setIsActive1(false)
  }, 500);

  //for second
  const [isActive2, setIsActive2] = useState(false)
  
  const ToggleClass2 = ()=>{
    setIsActive2(true);
    
  }
  setTimeout(() => {
    setIsActive2(false)
  }, 500);


  //for third
  const [isActive3, setIsActive3] = useState(false)
  
  const ToggleClass3 = ()=>{
    setIsActive3(true);
    
  }
  setTimeout(() => {
    setIsActive3(false)
  }, 500);


  //for forth
  const [isActive4, setIsActive4] = useState(false)
  
  const ToggleClass4 = ()=>{
    setIsActive4(true);
    
  }
  setTimeout(() => {
    setIsActive4(false)
  }, 500);


  //for fifth
  const [isActive5, setIsActive5] = useState(false)
  
  const ToggleClass5 = ()=>{
    setIsActive5(true);
    
  }
  setTimeout(() => {
    setIsActive5(false)
  }, 500);

  const [isActive6, setIsActive6] = useState(false)
  
  const ToggleClass6 = ()=>{
    setIsActive6(true);
    
  }
  setTimeout(() => {
    setIsActive6(false)
  }, 500);

  const [isActive7, setIsActive7] = useState(false)
  
  const ToggleClass7 = ()=>{
    setIsActive7(true);
    
  }
  setTimeout(() => {
    setIsActive7(false)
  }, 500);

  const [isActive8, setIsActive8] = useState(false)
  
  const ToggleClass8 = ()=>{
    setIsActive8(true);
    
  }
  setTimeout(() => {
    setIsActive8(false)
  }, 500);

  const [isActive9, setIsActive9] = useState(false)
  
  const ToggleClass9 = ()=>{
    setIsActive9(true);
    
  }
  setTimeout(() => {
    setIsActive9(false)
  }, 500);

  const [isActive10, setIsActive10] = useState(false)
  
  const ToggleClass10 = ()=>{
    setIsActive10(true);
    
  }
  setTimeout(() => {
    setIsActive10(false)
  }, 500);

  const [isActive11, setIsActive11] = useState(false)
  
  const ToggleClass11 = ()=>{
    setIsActive11(true);
    
  }
  setTimeout(() => {
    setIsActive11(false)
  }, 500);

  return (
    <div className="w-full h-screen duration-200"
      style = {{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
        <div className=" flex flex-wrap justify-cnter gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={ ()=> {(setColor("red")); ToggleClass1();}}
          className={`ouline-none px-4 py-1 rounded-full text-white shadow-lg ${isActive1 ? 'active' : ''}`}
          style={{backgroundColor: "red"}}
          >Red</button>
          
          <button
          onClick={ ()=> {(setColor("green")); ToggleClass2();}}
          className={`ouline-none px-4 py-1 rounded-full text-white shadow-lg ${isActive2 ? 'active' : ''}`}
          style={{backgroundColor: "green"}}
          >Green</button>
          
          <button
          onClick={ ()=> {(setColor("blue")); ToggleClass3();}}
          className={`ouline-none px-4 py-1 rounded-full text-white shadow-lg ${isActive3 ? 'active' : ''}`}
          style={{backgroundColor: "blue"}}
          >Blue</button>
          
          <button
         onClick={ ()=> {(setColor("pink")); ToggleClass4();}}
         className={`ouline-none px-4 py-1 rounded-full text-white shadow-lg ${isActive4 ? 'active' : ''}`}
          style={{backgroundColor: "pink"}}
          >Pink</button>
          
          <button
          onClick={ ()=> {(setColor("purple")); ToggleClass5();}}
          className={`ouline-none px-4 py-1 rounded-full text-white shadow-lg ${isActive5 ? 'active' : ''}`}
          style={{backgroundColor: "purple"}}
          >Purple</button>
          
          <button
          onClick={ ()=> {(setColor("lavender")); ToggleClass6();}}
          className={`ouline-none px-4 py-1 rounded-full text-black shadow-lg ${isActive6 ? 'active' : ''}`}
          style={{backgroundColor: "lavender"}}
          >Lavender</button>
          
          <button
          onClick={ ()=> {(setColor("olive")); ToggleClass7();}}
          className={`ouline-none px-4 py-1 rounded-full text-white shadow-lg ${isActive7 ? 'active' : ''}`}
          style={{backgroundColor: "olive"}}
          >Olive</button>
          
          <button
          onClick={ ()=> {(setColor("gray")); ToggleClass8();}}
          className={`ouline-none px-4 py-1 rounded-full text-white shadow-lg ${isActive8 ? 'active' : ''}`}
          style={{backgroundColor: "gray"}}
          >Gray</button>
          
          <button
          onClick={ ()=> {(setColor("yellow")); ToggleClass9();}}
          className={`ouline-none px-4 py-1 rounded-full text-black shadow-lg ${isActive9 ? 'active' : ''}`}
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
          
          <button
          onClick={ ()=> {(setColor("white")); ToggleClass10();}}
          className={`ouline-none px-4 py-1 rounded-full text-black shadow-lg ${isActive10 ? 'active' : ''}`}
          style={{backgroundColor: "white"}}
          >White</button>
          
          <button
          onClick={ ()=> {(setColor("black")); ToggleClass11();}}
          className={`ouline-none px-4 py-1 rounded-full text-white shadow-lg ${isActive11 ? 'active' : ''}`}
          style={{backgroundColor: "black"}}
          >Black</button>

        </div>
       </div>
    </div>
  )
}

export default App
