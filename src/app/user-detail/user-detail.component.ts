import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore'; 
import { Observable } from 'rxjs';
import { User } from '../../models/user.class';
import { MatIcon } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';
import { CommonModule, NgIf } from '@angular/common';


@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [MatCard, MatCardHeader, MatCardContent, MatCardTitle, MatIcon, MatMenuModule, CommonModule, NgIf],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent {
  constructor(private router: ActivatedRoute, 
    private firestore: Firestore,
    public dialog: MatDialog) {}

  userId = '';
  users$!: Observable<any[]>;
  user!: User;

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.userId = params['id'];
      this.getUser();
    })
  }

  getUser() {
    const usersCollection = collection(this.firestore, 'users');
    this.users$ = collectionData(usersCollection, { idField: 'id' });
    
    this.users$.subscribe((users) => {
      console.log(users);
      
      const user = users.find((user) => user.id === this.userId);
      if (user) {
        this.user = new User(user);

      }
    });
  }

  editMenu() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  editUserDetail() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }
}
