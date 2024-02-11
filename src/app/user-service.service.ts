import { Injectable, signal } from '@angular/core';

export interface User {
  name: string,
  firstName: string
};

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  public users = signal<User[]>([]);

  constructor() { }


  public addUser(user: User) {
    this.users.update((v) => {
      v.push(user);
      return v;
    });
    this.users.update(v => ([...v, { name: user.name, firstName: user.firstName }]));
  }
  
  public getUsers(): Array<User> {
    return this.users();
  }


}
