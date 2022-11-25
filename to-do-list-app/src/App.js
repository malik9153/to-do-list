import './App.css';
import {useState} from 'react'

function App() {
  const [taskArr, setTaskArr] = useState([])
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [input, setInput] = useState('')



  const handleClick = () => {
    const id = taskArr.length + 1
    setTaskArr((prev) => 
      [...prev, {task:input, id: id, completed: false}] 
    )
    setInput('')
  }
  const handleComplete = (id) => {
    let list = taskArr.map((task) => {
      let item = {};
      if(task.id == id){
        if(!task.completed){
          setCompletedTaskCount(completedTaskCount + 1);}
          else { 
            setCompletedTaskCount(completedTaskCount - 1);
          }
          item = { ...task, completed: !task.completed };
        } else item = { ...task };
        return item;
      })
      setTaskArr(list);
    }
 
  
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <body>
        <h1> To-Do-List</h1>
        <div id='board'>

          <div id='column-1'>
            <h2>
              Not Started
            </h2>
            {completedTaskCount}
            <ul>
            {taskArr.map(function (task) {
              return (<li id={task.id} completed={task.completed} 
               onClick={() => handleComplete(task.id)}
               style=
              {{
              listStyle: "none",
              textDecoration: task.completed && "line-through",
             }} >
             {task.task}
              </li>)
            })}
            </ul>
          </div>
          <input value={input} onInput={(e) => {
            setInput(e.target.value)
          }}/>
          <button onClick = {() => {
              handleClick()
            }}>
          
          </button>
        </div>
      </body>
    </div>
  );
}


export default App;
