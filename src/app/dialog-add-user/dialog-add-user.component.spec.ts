import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogAddUserComponent } from './dialog-add-user.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importiere BrowserAnimationsModule

describe('DialogAddUserComponent', () => {
  let component: DialogAddUserComponent;
  let fixture: ComponentFixture<DialogAddUserComponent>;

  beforeEach(async () => {
    const mockFirestore = jasmine.createSpyObj('Firestore', ['collection', 'doc', 'set', 'update', 'delete']);
    const mockDialogRef = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [MatDialogModule, DialogAddUserComponent, BrowserAnimationsModule], // Füge BrowserAnimationsModule hinzu
      providers: [
        { provide: Firestore, useValue: mockFirestore },
        { provide: MatDialogRef, useValue: mockDialogRef }
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
