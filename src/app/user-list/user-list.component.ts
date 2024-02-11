import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styles: [`
  .users {
    display: flex;
    padding:10px;
    border: 1px solid black;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    margin-bottom: 5px;
  }
  `]
})
export class UserListComponent implements OnInit {

  public users: Array<{ name: string, firstName: string }> = [];

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
    console.log(this.users);
    
  }

}
