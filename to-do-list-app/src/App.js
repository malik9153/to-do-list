import './App.css';
import {useState} from 'react'

function App() {
  const [taskArr, setTaskArr] = useState(['Task 1', 'task 2', 'task 3'])
  
  const [input, setInput] = useState('')

  const handleClick = () => {
    const id = taskArr.length + 1
    setTaskArr((prev) => 
      [...prev, {task:input, id: id, completed: false}] 
    )
    setInput('')
  }


  const addTask = function() {
    const newList =  [...taskArr, 'task 4']
    return setTaskArr(newList)
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
            <ul>
            {taskArr.map(function (task) {
              return (<li id={task.id} completed={task.completed}>{}<h2>{task}</h2>
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
