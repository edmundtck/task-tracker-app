const formatDate = (date) => {
	const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
	const covertDate = new Date(date);
	const formateDate = covertDate.toLocaleDateString('en-GB', options);
	return formateDate;
};

export default formatDate;
