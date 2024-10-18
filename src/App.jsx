import { useState } from 'react'
import './App.css'
function App() {
  const [calculator,setCalculator]=useState('')

  const displayContent=(content)=>{
   setCalculator(calculator+content)
  }
  const removeContent=()=>{
    setCalculator(calculator.slice(0,-1))
  }
  const calcScreen=()=>{
    setCalculator(eval(calculator))
  }
  const clearCalculator=()=>{
    setCalculator("")
  }



  return (
    <>
    <div style={{width:"100%",height:"100vh",backgroundColor:"black",display:"flex",justifyContent:"center",}}>
      <div style={{width:"600px",height:"60vh",backgroundColor:"white",marginTop:"200px",borderRadius:"20px",boxShadow:"0px 0px 10px 10px grey"}}>
       <input value={calculator} style={{width:"560px",height:"10vh",marginTop:"20px",marginLeft:"20px",borderRadius:"20px",fontSize:"20px"}} type="text"placeholder='0' />
       <div id='result' style={{alignItems:"center",justifyContent:"center",marginLeft:"30px"}}>
       <div>
       <button onClick={()=>displayContent('1')}style={{padding:"20px 60px",backgroundColor:"black",color:"white"}}>1</button>
       <button onClick={()=>displayContent('2')} style={{padding:"20px 60px",backgroundColor:"black",color:"white"}}>2</button>
       <button onClick={()=>displayContent('3')} style={{padding:"20px 60px",backgroundColor:"black",color:"white"}}>3</button>
       <button onClick={()=>displayContent('+')}  style={{padding:"20px 60px",backgroundColor:"black",color:"white",marginLeft:"20px",margin:"10px"}}>+</button>


      </div>
      <div>
       <button onClick={()=>displayContent('4')} style={{padding:"20px 60px",backgroundColor:"black",color:"white"}}>4</button>
       <button onClick={()=>displayContent('5')} style={{padding:"20px 60px",backgroundColor:"black",color:"white"}}>5</button>
       <button onClick={()=>displayContent('6')} style={{padding:"20px 60px",backgroundColor:"black",color:"white"}}>6</button>
       <button onClick={()=>displayContent('-')} style={{padding:"20px 60px",backgroundColor:"black",color:"white",marginLeft:"20px",margin:"10px"}}>-</button>


       </div>
       <div>
       <button onClick={()=>displayContent('7')} style={{padding:"20px 60px",backgroundColor:"black",color:"white",}}>7</button>
       <button onClick={()=>displayContent('8')} style={{padding:"20px 60px",backgroundColor:"black",color:"white"}}>8</button>
       <button onClick={()=>displayContent('9')} style={{padding:"20px 60px",backgroundColor:"black",color:"white"}}>9</button>
       <button onClick={()=>displayContent('/')} style={{padding:"20px 60px",backgroundColor:"black",color:"white",marginLeft:"20px",margin:"10px"}}>/</button>

       </div>
       </div>
       <div>
        <div style={{marginLeft:"30px"}}>
        <button onClick={removeContent} style={{padding:"30px 50px",backgroundColor:"black",color:"white",fontSize:"13px",margin:"5px"}}>Del</button>

       <button onClick={clearCalculator} style={{padding:"30px 50px",backgroundColor:"black",color:"white",fontSize:"13px",margin:"5px"}}>AC</button>
       <button onClick={calcScreen} style={{padding:"30px 50px",backgroundColor:"black",color:"white",}}>=</button> 
       <button onClick={()=>displayContent('*')} style={{padding:"20px 60px",backgroundColor:"black",color:"white",marginLeft:"25px"}}>*</button>
       </div>
       

       </div>
      
        
      </div>
    </div>
     
    </>
  )
}

export default App
