import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserDetailComponent } from './user-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { Firestore } from '@angular/fire/firestore';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async () => {
    const mockFirestore = jasmine.createSpyObj('Firestore', ['collection']); // Mock für Firestore

    await TestBed.configureTestingModule({
      imports: [UserDetailComponent, MatDialogModule, RouterModule.forRoot([])],
      providers: [
        { provide: Firestore, useValue: mockFirestore }, // Provider für den Mock
        {
          provide: ActivatedRoute,
          useValue: { params: of({ id: '123' }) } // Mock für die Route-Parameter
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
