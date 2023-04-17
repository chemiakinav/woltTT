import { TypeWeekDay } from 'models';
import moment from 'moment';

export const getHourBySeconds = (seconds: number) => {
	return moment().startOf('day').seconds(seconds).format('h A');
};

export const isToday = (day: TypeWeekDay) => {
	return moment().format('dddd').toLowerCase() === day;
};
