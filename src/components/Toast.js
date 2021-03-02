import React from 'react';
import { FaTimes } from 'react-icons/fa';

import { FaRegCalendarCheck } from 'react-icons/fa';

import '../styles/Toast.css';

function Toast({ reminders, closeToast }) {
	return (
		<div className="toast">
			<div className="toast__header">
				<div className="toast__title">
					<FaRegCalendarCheck /> <strong>Reminder</strong>
				</div>
				<button className="btn btn-link toast__btn" type="button" onClick={closeToast}>
					<FaTimes />
				</button>
			</div>
			<div className="toast__body">{reminders.map((reminder) => <p key={reminder.id}>- {reminder.task}</p>)}</div>
		</div>
	);
}

export default Toast;
