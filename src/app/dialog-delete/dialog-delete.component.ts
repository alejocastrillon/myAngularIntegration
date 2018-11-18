import { UserService } from './../user/user.service';
import { UserModel } from './../model/user.model';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from '@angular/material';
import { Component, OnInit, Inject } from '@angular/core';
import { OK } from '../model/httpStatus';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  private user: UserModel;
  // tslint:disable-next-line:max-line-length
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogDeleteComponent>, private snack: MatSnackBar, private service: UserService, private route: Router) {
    this.user = data.user;
   }

  ngOnInit() {
  }

  public deleteUser(): void {
    this.service.delete(this.user).subscribe(res => {
      console.log(res);
      if (res.resultCode == OK) {
        this.dialogRef.close();
        this.snack.open(res.message, 'Aceptar', {
          duration: 3000
        });
        // tslint:disable-next-line:no-unused-expression
        location.reload();
      }
    });
  }

}