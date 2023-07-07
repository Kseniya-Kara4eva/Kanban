import {Routes, Route} from 'react-router-dom'
import Board from '../board/Board'
import TaskDetail from '../task-detail/TaskDetail'


const Main = (props) => {
	return (
			<Routes>
				<Route exact path={'/'}>
					<Board {...props} />
				</Route>
				<Route path={'/tasks/:taskId'}>
					<TaskDetail {...props} />
				</Route>
			</Routes>
	)
}

export default Main
