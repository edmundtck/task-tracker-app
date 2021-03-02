import React from 'react';
import '../styles/Header.css';

function Header({ displayForm, toggleDisplay }) {
	return (
		<header className="header">
			<h1 className="logo">Task Tracker</h1>
			<button className={`btn ${displayForm ? 'btn-danger' : 'btn-success'}`} onClick={toggleDisplay}>
				{displayForm ? 'Close' : 'Add'}
			</button>
		</header>
	);
}

export default Header;
