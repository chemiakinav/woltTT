import Icon from 'components/icon';
import { getHourBySeconds, getTypedEntries, isToday } from 'helpers';
import { en } from 'locale';
import { TypeNormalizedSchedule } from 'models';
import React, { FunctionComponent } from 'react';

import styles from './Schedule.scss';

type TypeProps = {
	schedule: TypeNormalizedSchedule;
};

const Schedule: FunctionComponent<TypeProps> = ({ schedule }) => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.scheduleTitle}>
				<Icon glyph="clock" className={styles.clockIcon} />
				<span>{en.scheduleTitle}</span>
			</div>

			{getTypedEntries(schedule).map(([day, daySchedule]) => (
				<div key={day} className={styles.dayLine}>
					<div className={styles.dayName}>
						{en[day]}
						{isToday(day) && <span className={styles.today}>{en.today}</span>}
					</div>

					{daySchedule.length ? (
						daySchedule
							.map(
								([open, close]) =>
									`${getHourBySeconds(open)} - ${getHourBySeconds(close)}`,
							)
							.join(', ')
					) : (
						<span className={styles.closed}>{en.closed}</span>
					)}
				</div>
			))}
		</section>
	);
};

export default Schedule;
