import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialog} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import {MatCardModule} from '@angular/material/card';
import { NgFor } from '@angular/common';
import { Firestore, collection, addDoc, collectionData, provideFirestore } from '@angular/fire/firestore'; 
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule, MatCardModule, NgFor, RouterLink, 
    ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  users$!: Observable<any[]>;
  allUsers: any[] = [];
  constructor(public dialog: MatDialog, private firestore: Firestore) { }

  ngOnInit(): void {
    const usersCollection = collection(this.firestore, 'users');

    this.users$ = collectionData(usersCollection, { idField: 'id' });

    this.users$.subscribe((users) => {
      console.log(users);
      this.allUsers = users;
    });
  }

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
