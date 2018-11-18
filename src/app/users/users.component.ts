import { DialogDeleteComponent } from './../dialog-delete/dialog-delete.component';

import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/user.model';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  public users: Array<UserModel>;
  displayedColumns: string[] = ['Detalle', 'firstName', 'secondName', 'firstSurname', 'secondSurname', 'Acciones'];

  constructor(private service: UsersService, private route: Router, private dialog: MatDialog) { }

  ngOnInit() {
    this.loadUser();
  }

  public loadUser(): void {
    this.service.getUsers().subscribe(res => {
      console.log(res);
      this.users = res;
    });
  }

  public editUser(user: UserModel): void {
    sessionStorage.setItem('user', JSON.stringify(user));
    console.log(user);
    this.route.navigate(['/createUserComponent']);
  }

  public getUser(user: UserModel): void {
    sessionStorage.setItem('user', JSON.stringify(user));
    this.route.navigate(['/userComponent']);
  }

  public deleteUser(user: UserModel): void {
    this.dialog.open(DialogDeleteComponent, {
      data: {
        user: user
      }
    });
  }

}
