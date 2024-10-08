import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserComponent } from './user.component'; // Standalone-Komponente
import { MatDialogModule } from '@angular/material/dialog';
import { Firestore } from '@angular/fire/firestore';
import { of } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// Mock für Firestore
const mockFirestore = {
  collection: jasmine.createSpy().and.returnValue({
    valueChanges: () => of([]) // Beispiel für leere Daten
  }),
  doc: jasmine.createSpy(),
  set: jasmine.createSpy(),
  update: jasmine.createSpy(),
  delete: jasmine.createSpy(),
  type: 'firestore',
  app: {},  // Platzhalter für die App-Instanz
  toJSON: jasmine.createSpy()
};

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        UserComponent,  // Standalone-Komponenten müssen hier importiert werden
        MatDialogModule,
        NoopAnimationsModule,
      ],
      providers: [
        { provide: Firestore, useValue: mockFirestore },
        provideFirebaseApp(() => initializeApp({
          projectId: 'simple-crm-aa940', // gib dein echtes Firebase-Projekt an
          appId: '1:442328058070:web:feddf2b6a06f77ef176177',
          apiKey: 'API_KEY_HERE',
        })),
        provideFirestore(() => getFirestore()),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
