import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user.class';
import { Firestore, collection, addDoc } from '@angular/fire/firestore'; 
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatProgressBarModule,
    NgIf
  ],
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'], // styleUrls ist korrekt
})
export class DialogAddUserComponent {
  loading = false;
  user = new User();
  birthDate: Date = new Date(); 

  constructor(private firestore: Firestore, public dialogRef : MatDialogRef<DialogAddUserComponent>) {} 

  async saveUser() {
    this.user.birthDate = this.birthDate?.getTime(); 
    this.loading = true;
    const usersCollection = collection(this.firestore, 'users'); 

    try {
      await addDoc(usersCollection, { ...this.user }); 
      console.log('User added successfully');
      this.loading = false;
      this.dialogRef.close();
    } catch (error) {
      console.error('Error adding user: ', error); 
    }
  }
}

