import { TypeWeekDay } from './TypeWeekday';

export type TypeTimeSlot = {
	type: 'open' | 'close';
	value: number;
};

export type TypeSchedule = Record<TypeWeekDay, Array<TypeTimeSlot>>;
