import React from 'react';
// export const divElement = <div>I'm JSX</div>

// export const element = (
// 	 <div className="elementClass">
// 		 Hey JSX
// 	 </div>
// )

// export class ClassComponent extends React.Component {
// 	render() {
// 		const { className } = this.props;
// 		return (
// 			 <div className={className}>
// 				 hey I'm Class Component
// 				 <div className={`${className}__item`}/>
// 			 </div>
// 		)
// 	}
// }

// export class Class extends React.Component {
// 	constructor(props) {
// 		super(props);
//
// 		this.cn = props.className;
// 		this.state = {
// 			someState: props.className
// 		}
// 	}
// 	render() {
// 		return (
// 			 <div>
// 				 hey I'm Class Component
// 				 with {this.cn} props;
// 			 </div>
// 		)
// 	}
// }

export const FnComponent = ({className}) => <div>I'm a single Component with {className} props</div>