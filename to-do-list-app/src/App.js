import './App.css';
import {useState} from 'react'

function App() {
  const [taskArr, setTaskArr] = useState(['Task 1', 'task 2', 'task 3'])
  
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
            {taskArr.map(function (task) {
              return (<div id="taskCard"> <h2>{task}</h2>
              </div>)
            })}
          </div>
          <button>
            onClick{() => {
              addTask()
            }}
          </button>
        </div>
      </body>
    </div>
  );
}


export default App;
