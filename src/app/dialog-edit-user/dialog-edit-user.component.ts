import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatProgressBar } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import { MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Firestore, collection, doc, updateDoc } from '@angular/fire/firestore';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-dialog-edit-user',
  standalone: true,
  imports: [MatProgressBar, MatFormField, MatLabel, FormsModule, MatDialogClose, NgFor, MatDatepickerModule, NgIf, CommonModule, MatInputModule],
  templateUrl: './dialog-edit-user.component.html',
  styleUrl: './dialog-edit-user.component.scss'
})
export class DialogEditUserComponent {
  user = new User();
  loading = false;
  birthDate: Date = new Date();
  userId: string = '';

  constructor(public dialogRef: MatDialogRef<DialogEditUserComponent>, private firestore: Firestore) {}

  async saveUser() {
    this.loading = true;
    const userDocRef = doc(this.firestore, `users/${this.userId}`);
    await updateDoc(userDocRef, this.user.toJSON());
    this.loading = false;
    this.dialogRef.close();
  }
}
