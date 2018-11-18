import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/user.model';
import { MatSnackBar } from '@angular/material';
import { CreateUserService } from './create-user.service';
import { Router } from '@angular/router';
import { OK, NOT_ACCEPTABLE } from '../model/httpStatus';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  private user: UserModel;

  constructor(private snack: MatSnackBar, private service: CreateUserService, private route: Router) {
    this.user = new UserModel();
  }

  ngOnInit() {
    if (sessionStorage.getItem('user')) {
      this.user = JSON.parse(sessionStorage.getItem('user'));
    } else {
      this.user = new UserModel();
    }
  }

  public saveOrUpdate(): void {
    console.log(this.user);
    if (this.isValidUser()) {
      this.service.saveorUpdate(this.user).subscribe(res => {
        this.snack.open(res.message, 'Aceptar', {
          duration: 3000
        });
        if (res.resultCode == OK) {
          this.route.navigate(['/usersComponent']);
        }
      });
    }
  }

  public isValidUser(): boolean {
    if (this.user.firstName == null || this.user.firstName === '') {
      this.snack.open('Es necesario ingresar el primer nombre', 'Aceptar', {
        duration: 3000
      });
      return false;
    } else if (this.user.firstSurname == null || this.user.firstSurname === '') {
      this.snack.open('Es necesario ingresar el primer apellido', 'Aceptar', {
        duration: 3000
      });
      return false;
    } else if (this.user.email == null || this.user.email === '') {
      this.snack.open('Es necesario ingresar el correo electronico', 'Aceptar', {
        duration: 3000
      });
      return false;
    } else if (this.user.password == null || this.user.password === '') {
      this.snack.open('Es necesario ingresar una contraseña', 'Aceptar', {
        duration: 3000
      });
      return false;
    }
    return true;
  }

}
