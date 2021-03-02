import React from 'react';
import '../styles/Footer.css';

function Footer() {
	let date = new Date();
	date = date.getFullYear();
	return (
		<footer className="footer">
			<p>Copyright &copy; {date}</p>
		</footer>
	);
}

export default Footer;
