import Icon from 'components/icon';
import { normalize } from 'helpers';
import { en } from 'locale';
import { TypeNormalizedSchedule, TypeSchedule } from 'models';
import React, { ChangeEvent, FunctionComponent, useRef, useState } from 'react';

import styles from './ButtonFileUpload.scss';

type PropsButtonFileUpload = {
	setCurrentSchedule: (uploadedSchedule: TypeNormalizedSchedule) => void;
};

const ButtonFileUpload: FunctionComponent<PropsButtonFileUpload> = ({
	setCurrentSchedule,
}) => {
	const [error, setError] = useState('');
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleUploadClick = () => {
		fileInputRef.current!.click();

		return;
	};

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const files = event.target.files;

		if (files) {
			const file = files[0];
			const reader = new FileReader();

			reader.readAsText(file);

			reader.onload = function () {
				if (reader.result) {
					const schedule = JSON.parse(reader.result as string);

					try {
						const normalizedSchedule = normalize(schedule as TypeSchedule);

						setCurrentSchedule(normalizedSchedule);
						setError('');
					} catch (e) {
						setError('You load incorrect format of json');
					}
				}
			};

			reader.onerror = function () {
				setError('Error while uploading file, try another one');
			};
		}
	};

	return (
		<>
			<input
				accept={'.json'}
				ref={fileInputRef}
				type={'file'}
				multiple={false}
				className={styles.inputUpload}
				onChange={handleChange}
			/>
			<div className={styles.button} onClick={handleUploadClick}>
				<Icon glyph="uploadCloud" className={styles.icon} />
				{en.upload}
			</div>
			{error && <div className={styles.error}>{error}</div>}
		</>
	);
};

export default ButtonFileUpload;
