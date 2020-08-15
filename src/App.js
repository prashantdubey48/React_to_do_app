import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';




const App = () => {

  const [inputList,setInputList] = useState("")
  const [Items,setItems] = useState([])

  const itemEvent=(event)=>{
    setInputList(event.target.value)

  }
  const onAddButtonClick =()=>{
    if(inputList !== ""){
      setItems((olditems)=>{
        return [...olditems,inputList]
      })
      setInputList("");
    }
    

  }
  return(
  <div className="center_div" style={{width:'100%',background:'#add8e6',  height: '100vh' , display:"flex",flexDirection:'row',justifyContent:'center',alignItems:'center',textAlign:'center'}}>
    <div className="center_div" style={{width:'25%',height:'80vh',background:'#F8A796',borderRadius:15}}>
     <br/>
     <h1 style={{color:"white",background:'transparent',backgroundColor:'#176CB9',padding:10,marginBottom:10}}>ToDo List</h1>
     <br/>
     <input style = {{ borderBottomWidth:2,borderBottomColor:'#000000',width:'60%',outline:'none',textAlign:'center',height:30,top:10,border:'none',background:"transparent",fontSize:20,fontWeight:500}}
     type='text' placeholder='Add a Item' value={inputList} onChange={itemEvent}/>
     <button onClick={onAddButtonClick}> + </button>
     <ol>
      {
        Items.map( (itemvalue=>{
        return (
        <div style={{flexDirection:'row'}}>
        <li>{itemvalue}</li>
        <h6>clear</h6>

        </div>)
        }))
      }
     </ol>
    </div>

   </div>
  )
};

export default App;
