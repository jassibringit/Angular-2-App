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
  {  id:25, name: "chris", username:"jassi"},
  { id:26, name:"nick", username:"nicktweets"},
  {id:27, name:"holly", username:"hollyyyy"}
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