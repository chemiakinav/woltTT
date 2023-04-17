import { TypeSchedule, TypeTimeSlot, TypeWeekDay } from 'models';

import { getTypedEntries } from './getTypedEntries';

const daysSequence: Array<TypeWeekDay> = [
	'sunday',
	'monday',
	'tuesday',
	'wednesday',
	'thursday',
	'friday',
	'saturday',
];

const getNextDay = (currentDay: TypeWeekDay) =>
	daysSequence[daysSequence.indexOf(currentDay) + 1] || daysSequence[0];

const spliceIntoChunks = (arr: Array<TypeTimeSlot>) => {
	const res = [];

	for (let i = 0; i < arr.length; i += 2) {
		const chunk = arr.slice(i, i + 2).map((timeSlot) => timeSlot.value);
		res.push(chunk);
	}

	return res;
};

export const normalize = (obj: TypeSchedule) => {
	const normalized = {} as Record<TypeWeekDay, Array<Array<number>>>;

	getTypedEntries(obj).forEach(([day, daySchedule]) => {
		/* 
			considering that daySchedule already comes sorted
			if not - add additional sorting by value ect. daySchedule.sort((a, b) => a.value - b.value)
		 */
		const filteredTime = daySchedule.reduce((acc, { type, value }, currentIndex) => {
			if (type === 'close' && currentIndex === 0) return acc;

			acc.push({ type, value });

			if (type === 'open' && currentIndex === daySchedule.length - 1) {
				acc.push(obj[getNextDay(day)][0]);
			}

			return acc;
		}, [] as Array<TypeTimeSlot>);

		normalized[day] = spliceIntoChunks(filteredTime);
	});

	return normalized;
};
