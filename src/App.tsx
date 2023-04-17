import ButtonFileUpload from 'components/buttonFileUpload';
import Schedule from 'components/schedule';
import { en } from 'locale';
import { TypeNormalizedSchedule } from 'models';
import React, { FunctionComponent, useState } from 'react';

import styles from './App.scss';

const App: FunctionComponent = () => {
	const [schedule, setSchedule] = useState<TypeNormalizedSchedule>();

	const setCurrentSchedule = (uploadedSchedule: TypeNormalizedSchedule) =>
		setSchedule(uploadedSchedule);

	return (
		<div className={styles.content}>
			<div className={styles.uploadSection}>
				<div className={styles.instructions}>{en.uploadInstructions}</div>
				<ButtonFileUpload setCurrentSchedule={setCurrentSchedule} />
			</div>
			{schedule && <Schedule schedule={schedule} />}
		</div>
	);
};

export default App;
