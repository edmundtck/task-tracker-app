import moment from 'moment';

const sortTasksByDate = (tasks) => {
	const sortedTasks = tasks.slice().sort((a, b) => moment(a.date).diff(moment(b.date)));
	return sortedTasks;
};

export default sortTasksByDate;
