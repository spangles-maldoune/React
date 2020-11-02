import React from 'react'

export class Tooltip extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isToggle: false
		}

		this.showTooltip = this.showTooltip.bind(this);
	}

	showTooltip() {
		this.setState(state => ({
			isToggle: !state.isToggle
		}));
	}

	render() {
		const { isToggle } = this.state;

		return (
			<div className="tooltip">
				<span className="tooltip-elem" onMouseEnter={this.showTooltip}>Наведи на меня!</span>
				{isToggle && (<span className="tooltip-splash">Я подсказка!</span>)}
			</div>
		)
	}
}