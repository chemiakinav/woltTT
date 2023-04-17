import {
	example1,
	example2,
	normalizedExample1,
	normalizedExample2,
} from '../__mocks__/schedules';
import { normalize } from '../helpers/normalize';

test('calculate correct tax value', () => {
	expect(normalize(example1)).toStrictEqual(normalizedExample1);
	expect(normalize(example2)).toStrictEqual(normalizedExample2);
});
