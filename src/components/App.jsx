import React,{useState} from "react";






function App() {
  const [item,setItem]=useState("");
  // const List=["milk","vegetable","books"];
  const[List,addList]= useState(["milk","vegetable"]);



  function handleItem(event){
     console.log(event.target.value);
    setItem(event.target.value);
  }

  function handleList(){
      
      //  console.log(List);
      //  addList([...List,item]);       //***it also works */

      addList(prevValue=>{
        return [...prevValue,item];
                 
        
      });
     
    
  }

  function createList(item){
       return <li>{item}</li>;
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleItem} value={item} />
        <button onClick={handleList}>
          <span >Add</span>
        </button>
      </div>
      <div>
        <ul>
          {List.map(createList)}
        </ul>
      </div>
    </div>
  );
}

export default App;
