/** @format */

import Toast from 'react-native-toast-message';
export const validEmail = (text) => {
	const re = /\S+@\S+\.\S+/;
	const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

	if (re.test(text) || regex.test(text)) {
		return true;
	} else {
		return false;
	}
};

export function getGreeting() {
	const now = new Date();
	const hour = now.getHours();

	if (hour >= 0 && hour < 6) {
		return 'Good Night';
	} else if (hour >= 6 && hour < 12) {
		return 'Good Morning';
	} else if (hour >= 12 && hour < 18) {
		return 'Good Afternoon';
	} else {
		return 'Good Evening';
	}
}

export function formatDate(date) {
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	];
	const dayName = days[date.getDay()];

	const dd = String(date.getDate()).padStart(2, '0');
	const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
	const yyyy = date.getFullYear();

	return `${dayName} ${mm}-${dd}-${yyyy}`;
}

export const setContainerWidth = (width) => {
	if (width >= 65) {
		return '65%';
	} else if (width <= 15) {
		return '15%';
	} else {
		return width.toString() + '%';
	}
};
export const errorToast = (header, message) => {
	Toast.show({
		type: 'error',

		text1: header,

		text2: message,
	});
};
