
import './style/App.scss'
import FormInput from "./component/FormInput/FormInput.tsx";
import TaskList from "./component/TaskList/TaskList.tsx";

function App() {

  return (
    <>
      <div className={'background-gradient'}>
          <main className="main">
              <FormInput/>
              <TaskList/>
          </main>
      </div>
    </>
  )
}

export default App
