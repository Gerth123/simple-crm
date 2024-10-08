import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatProgressBar } from '@angular/material/progress-bar';
import { User } from '../../models/user.class';
import { MatDialogClose, MatDialogRef } from '@angular/material/dialog';
import { Firestore, doc, updateDoc } from '@angular/fire/firestore';
import { CommonModule, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dialog-edit-address',
  standalone: true,
  imports: [MatProgressBar, MatFormField, MatLabel, FormsModule, CommonModule, NgIf, MatInputModule, MatDialogClose], 
  templateUrl: './dialog-edit-address.component.html',
  styleUrls: ['./dialog-edit-address.component.scss'] // Beachte, dass es `styleUrls` sein sollte
})
export class DialogEditAddressComponent {
  user: User = new User(); // Stelle sicher, dass `user` initialisiert wird
  loading = false;
  userId: string = '';  

  constructor(public dialogRef: MatDialogRef<DialogEditAddressComponent>, private firestore: Firestore) { }

  async saveUser() {
    if (!this.userId) {
      console.error("User ID is not set.");
      return; // Beende die Methode, wenn die Benutzer-ID nicht gesetzt ist
    }

    this.loading = true;

    try {
      const userDocRef = doc(this.firestore, `users/${this.userId}`);
      await updateDoc(userDocRef, this.user.toJSON());
      this.dialogRef.close();
    } catch (error) {
      console.error("Error updating user:", error);
      // Hier kannst du auch einen Fehlerzustand setzen, um die UI entsprechend zu informieren
    } finally {
      this.loading = false;
    }
  }
}
