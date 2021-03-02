import React, { useState } from 'react';
import '../styles/AddTask.css';
import { v4 as uuid } from 'uuid';
import formatDate from '../helpers/formatDate';

const formInitState = {
	task: '',
	date: '',
	reminder: false
};

function AddTask({ addTask, displayForm }) {
	const [ form, setForm ] = useState(formInitState);

	const handleFormChange = (e) => {
		const { name, value, checked } = e.target;
		if (name !== 'reminder') {
			setForm({
				...form,
				[name]: value
			});
		} else {
			setForm({
				...form,
				[name]: checked
			});
		}
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		if (form.task === '' || form.date === '') {
			alert('Task and Date cannot be empty.');
			return;
		}
		const date = formatDate(form.date);
		const newTask = {
			id: uuid(),
			task: form.task,
			date: date,
			reminder: form.reminder
		};
		addTask(newTask);
		setForm(formInitState);
	};

	return (
		<div className="add-task">
			{displayForm && (
				<form className="add-task__form" onSubmit={handleFormSubmit}>
					<div className="form-group">
						<label>Task</label>
						<input
							className="form-control"
							onChange={handleFormChange}
							name="task"
							type="text"
							placeholder="Add Task"
							value={form.task}
						/>
					</div>

					<div className="form-group">
						<label>Date</label>
						<input
							className="form-control"
							onChange={handleFormChange}
							name="date"
							type="date"
							placeholder="Add Date & Time"
							value={form.date}
						/>
					</div>

					<div className="form-check">
						<input
							onChange={handleFormChange}
							name="reminder"
							id="form-checkbox"
							type="checkbox"
							checked={form.reminder}
						/>
						<label className="form-check-label" htmlFor="form-checkbox">
							Set reminder
						</label>
					</div>

					<button className="btn btn-primary" type="submit">
						Save Task
					</button>
				</form>
			)}
		</div>
	);
}

export default AddTask;
