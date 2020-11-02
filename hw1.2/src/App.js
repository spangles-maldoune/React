import './App.css';
import React from 'react';
import { Button } from "./components/Button";
import { Title } from "./components/Title";
import { Tooltip } from "./components/Tooltip";

class App extends React.Component {
	render() {
		return(
			 <div className="wrapper">
				 <div className="buttons-area">
					 <Button name="Button" className={`button button__default`}/>
					 <Button name="Button" className={`button button__error`}/>
					 <Button name="Button" className={`button button__success`}/>
				 </div>
				 <Title titleHeader="I`m a Title" titleContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit." customClass="title__default"/>
				 <Title titleHeader="I`m a Title too" titleContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit." customClass="title__error"/>
				 <Title titleHeader="I`m one more Title" titleContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit." customClass="title__success"/>
				 <Tooltip/>
			 </div>
		)
	}
}

export default App;
