//# sourceMappingURL=app.component.js.map

import { Component } from '@angular/core';
import {User} from "./shared/models/user"


@Component({
  selector: 'my-app',
  templateUrl: "./app/app.component.html",
  styleUrls: ["./app/app.component.css"]
})


export class AppComponent {
  message:  string = "Hello";
  users: User[] =  [
  {  id:25, name: "Jaswinder", username:"jassi"},
  { id:26, name:"Abirup", username:"abi12"},
  {id:27, name:"paul", username:"paulina42"}
  ];
  activeUser:User;

  selectUser(user){
  this.activeUser = user;
  console.log(this.activeUser);
  }

  onUserCreated(event){
  this.users.push(event.user);
  }

}