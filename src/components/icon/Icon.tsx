import { icons } from 'assets/icons';
import cn from 'classnames';
import React, { FunctionComponent } from 'react';

import styles from './Icon.scss';

export type PropsIcon = {
	glyph: keyof typeof icons;
	className?: string;
};

const Icon: FunctionComponent<PropsIcon> = (props) => {
	const { glyph, className } = props;

	const iconContent = icons[glyph];

	if (!iconContent) {
		console.error(`Icon: no icon for glyph ${glyph}`);

		return null;
	}

	return (
		<div
			className={cn(styles.icon, className)}
			dangerouslySetInnerHTML={{ __html: iconContent }}
		/>
	);
};

export default Icon;
