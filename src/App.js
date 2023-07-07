import Header from './components/components/header/Header';
import { useState, useEffect } from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Footer from './components/components/footer/Footer';
import './App.css';
import Board from './components/components/board/Board';
import TaskDetail from '../src/components/components/task-detail/TaskDetail'



function App() {
  const initialState = JSON.parse(window.localStorage.getItem('tasks')) || []
  const [tasks, setTasks] = useState(initialState)

	useEffect(() => {
		window.localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

  return (
    <div className='wrapper'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Board />} />
          <Route path='/tasks/:taskId' element={<TaskDetail />} />
        </Routes>
        <Header />
        <Footer tasks={tasks} />
      </Router>
    </div>
  );
}

export default App;
