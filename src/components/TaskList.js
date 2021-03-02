import React from 'react';
import '../styles/TaskList.css';

import { FaBell } from 'react-icons/fa';
import { FaBellSlash } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

function TaskList(props) {
	const { updateTask, deleteTask, tasks } = props;

	return (
		<div className="task-list">
			{tasks.length === 0 ? (
				<h3>No Task.</h3>
			) : (
				tasks.map((task) => (
					<div className={`task ${task.reminder ? 'task-reminder' : ''}`} key={task.id}>
						<div className="task__content">
							<h3>{task.task}</h3>
							<p>{task.date}</p>
						</div>
						<div className="task__action">
							<button className="btn btn-outline-info" onClick={() => updateTask(task.id)}>
								{task.reminder ? <FaBell /> : <FaBellSlash />}
							</button>
							<button className="btn btn-outline-danger" onClick={() => deleteTask(task.id)}>
								<FaTrashAlt />
							</button>
						</div>
					</div>
				))
			)}
		</div>
	);
}

export default TaskList;
