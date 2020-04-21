import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/service.index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) {
    this.user = this.userService.user;
  }

  ngOnInit() {
  }

  update(user: User) {
    this.user.name = user.name;
    this.user.email = user.email;

    this.userService.updateUser(this.user)
      .subscribe(response => {
        // console.log(response);
      });
  }

}
