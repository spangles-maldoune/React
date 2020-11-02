import React from 'react';

export class Title extends React.Component {
	render() {
		const { titleHeader, titleContent, customClass } = this.props;
		return (
			<div className={customClass}>
				<h2>{titleHeader}</h2>
				<p>{titleContent}</p>
			</div>

		)
	}
}