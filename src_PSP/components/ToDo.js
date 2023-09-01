import React,{useState} from 'react'

const ToDo=() => {
  const[Task, setTask]= useState("");
  const[Todolist, setTodoList]=useState([]);

  function handleChange(event) {
    setTask(event.target.value);
  }
  function addTask(event) {
    setTodoList([...Todolist,Task]);
  };
                            const deleteTask=(taskName) =>{
                                      
                                        setTodoList(
                                            Todolist.filter((task)=>{
                                                if (task!==taskName){
                                                    return true;
                                                } else{
                                                    return false;
                                                }
                                        })
                                        )}
                                          
    return (
    <div>
     <h1> Enter Task </h1>
     <input  onChange={handleChange}/>   
         <button  onClick={addTask}> Add Task </button>
        {/* {
            Todolist.map((val)=>
            {
                return <h1>{val}</h1>
            })
        } */}
   
    <div>
        {Todolist.map((task)=>{
            return(
                <div>
                    <h1> {task}</h1>
                    <button onClick={() => deleteTask(task)}>Delete</button>
                    </div>
            );
        })}
        </div>
        </div>
  );
}

export default ToDo