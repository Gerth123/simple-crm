import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogEditUserComponent } from './dialog-edit-user.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, NativeDateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; // Importiere NoopAnimationsModule

describe('DialogEditUserComponent', () => {
  let component: DialogEditUserComponent;
  let fixture: ComponentFixture<DialogEditUserComponent>;

  beforeEach(async () => {
    const mockFirestore = jasmine.createSpyObj('Firestore', ['collection', 'doc', 'set', 'update', 'delete']);

    await TestBed.configureTestingModule({
      imports: [
        DialogEditUserComponent,
        MatDialogModule,
        MatDatepickerModule,
        NoopAnimationsModule // Füge NoopAnimationsModule hinzu
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: Firestore, useValue: mockFirestore },
        { provide: DateAdapter, useClass: NativeDateAdapter },
        { provide: MAT_DATE_FORMATS, useValue: MAT_DATE_FORMATS }
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DialogEditUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
