import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatFormFieldModule, MatSelectModule, MatOptionModule} from '@angular/material';
// tslint:disable-next-line:max-line-length
import { MatInputModule, MatToolbarModule , MatSnackBarModule, MatIconModule, MatTableModule, MatCardModule, MatDialogModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  // tslint:disable-next-line:max-line-length
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatInputModule, MatToolbarModule, MatSnackBarModule, MatIconModule, MatTableModule, MatCardModule, MatDialogModule],
  // tslint:disable-next-line:max-line-length
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatFormFieldModule, MatSelectModule, MatOptionModule, MatInputModule, MatToolbarModule, MatSnackBarModule, MatIconModule, MatTableModule, MatCardModule, MatDialogModule],
})
export class MaterialModule { }
