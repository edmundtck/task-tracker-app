import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import Toast from './components/Toast';

import formatDate from './helpers/formatDate';
import './App.css';

const today = formatDate(new Date());
const initTasksState = [
	{
		id: uuid(),
		task: 'Learn some new things',
		date: today,
		reminder: false
	},
	{
		id: uuid(),
		task: 'Sleep early',
		date: today,
		reminder: true
	},
	{
		id: uuid(),
		task: 'Go out for exercise',
		date: today,
		reminder: false
	}
];

function App() {
	const initState = JSON.parse(localStorage.getItem('tasks')) || initTasksState;
	const [ tasks, setTasks ] = useState(initState);
	const [ displayForm, setDisplayForm ] = useState(false);
	const [ reminders, setReminders ] = useState([]);
	const [ displayToast, setDisplayToast ] = useState(false);

	const toggleDisplay = () => {
		setDisplayForm(!displayForm);
	};

	const addTask = (newTask) => {
		setTasks([ ...tasks, newTask ]);
	};

	const deleteTask = (id) => {
		const newTasks = tasks.filter((task) => task.id !== id);
		setTasks(newTasks);
	};

	const updateTask = (id) => {
		const newTasks = tasks.map((task) => (task.id === id ? { ...task, reminder: !task.reminder } : task));
		setTasks(newTasks);
	};

	const closeToast = () => {
		setDisplayToast(false);
	};

	useEffect(
		() => {
			const taskToJson = JSON.stringify(tasks);
			localStorage.setItem('tasks', taskToJson);
		},
		[ tasks ]
	);

	useEffect(() => {
		// get task, loop through and check if any reminder is today.
		const reminders = tasks.filter((task) => task.date === today && task.reminder === true);
		if (reminders.length > 0) {
			setReminders(reminders);
			setDisplayToast(true);
		}
	}, []);

	return (
		<div className="wrapper">
			<Header displayForm={displayForm} toggleDisplay={toggleDisplay} />
			<AddTask addTask={addTask} displayForm={displayForm} />
			<TaskList updateTask={updateTask} deleteTask={deleteTask} tasks={tasks} />
			<Footer />
			{displayToast && <Toast reminders={reminders} closeToast={closeToast} />}
		</div>
	);
}

export default App;
