import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogEditAddressComponent } from './dialog-edit-address.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; // Importiere NoopAnimationsModule

describe('DialogEditAddressComponent', () => {
  let component: DialogEditAddressComponent;
  let fixture: ComponentFixture<DialogEditAddressComponent>;

  beforeEach(async () => {
    const mockFirestore = jasmine.createSpyObj('Firestore', ['collection', 'doc', 'set', 'update', 'delete']); // Mock für Firestore

    await TestBed.configureTestingModule({
      imports: [
        DialogEditAddressComponent,
        MatDialogModule,
        NoopAnimationsModule // Füge hier NoopAnimationsModule hinzu
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: Firestore, useValue: mockFirestore } 
      ],
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogEditAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
