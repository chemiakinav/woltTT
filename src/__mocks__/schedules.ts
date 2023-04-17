import { TypeNormalizedSchedule } from '../models/TypeNormalizedSchedule';
import { TypeSchedule } from '../models/TypeSchedule';

export const example1: TypeSchedule = {
	monday: [],
	tuesday: [
		{ type: 'open', value: 36000 },
		{ type: 'close', value: 64800 },
	],
	wednesday: [],
	thursday: [
		{ type: 'open', value: 36000 },
		{ type: 'close', value: 64800 },
	],
	friday: [{ type: 'open', value: 36000 }],
	saturday: [
		{ type: 'close', value: 3600 },
		{ type: 'open', value: 36000 },
	],
	sunday: [
		{ type: 'close', value: 3600 },
		{ type: 'open', value: 43200 },
		{ type: 'close', value: 75600 },
	],
};

export const normalizedExample1: TypeNormalizedSchedule = {
	sunday: [[43200, 75600]],
	monday: [],
	tuesday: [[36000, 64800]],
	wednesday: [],
	thursday: [[36000, 64800]],
	friday: [[36000, 3600]],
	saturday: [[36000, 3600]],
};

export const example2: TypeSchedule = {
	monday: [],
	tuesday: [
		{ type: 'open', value: 36000 },
		{ type: 'close', value: 64800 },
	],
	wednesday: [],
	thursday: [
		{ type: 'open', value: 36000 },
		{ type: 'close', value: 64800 },
	],
	friday: [{ type: 'open', value: 64800 }],
	saturday: [
		{ type: 'close', value: 3600 },
		{ type: 'open', value: 32400 },
		{ type: 'close', value: 39600 },
		{ type: 'open', value: 57600 },
		{ type: 'close', value: 82800 },
	],
	sunday: [
		{ type: 'close', value: 3600 },
		{ type: 'open', value: 43200 },
		{ type: 'close', value: 75600 },
	],
};

export const normalizedExample2: TypeNormalizedSchedule = {
	sunday: [[43200, 75600]],
	monday: [],
	tuesday: [[36000, 64800]],
	wednesday: [],
	thursday: [[36000, 64800]],
	friday: [[64800, 3600]],
	saturday: [
		[32400, 39600],
		[57600, 82800],
	],
};
