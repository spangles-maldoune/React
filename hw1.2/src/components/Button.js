import React from 'react';

export class Button extends React.Component {
	render() {
		const { name, className } = this.props;
		return (
			 <button className={className}>I`m {name}</button>
		)
	}
}