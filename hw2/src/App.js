import React from "react";
import './App.css';
import CardsWrapper from "./components/CardsWrapper/CardsWrapper";
import NewUserButton from "./components/NewUserButton/NewUserButton";
import Modal from "./components/Modal/Modal";

import { users } from "./components/users";

class App extends React.Component {
   constructor(props) {
      super(props);

      this.state = {
         usersList: users,
         isActive: false
      }

      this.deleteSelectedUser = this.deleteSelectedUser.bind(this);
      this.addNewUser = this.addNewUser.bind(this);
      this.showModalWindow = this.showModalWindow.bind(this);
      this.closeModalWindow = this.closeModalWindow.bind(this);
   }

   deleteSelectedUser(index) {
   	users.splice(index, 1);
   	this.setState({usersList: users});
   }

   addNewUser(newUser) {
      users.push(newUser);
      this.setState({usersList: users})
   }

   showModalWindow() {
      this.setState({isActive: true});
   }

   closeModalWindow() {
      this.setState({isActive: false});
   }

   render() {
      const { isActive } = this.state;
      const { usersList } = this.state;

      return(
         <div className="App">
            <NewUserButton openModal={this.showModalWindow}/>
            <CardsWrapper usersList={usersList} removeUserCard={this.deleteSelectedUser}/>
            <Modal active={isActive} closeModal={this.closeModalWindow} pushNewUser={this.addNewUser}/>
         </div>
      )
   }

}

export default App;
