import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviPrestatairePageComponent } from './suivi-prestataire-page.component';

describe('SuiviPrestatairePageComponent', () => {
  let component: SuiviPrestatairePageComponent;
  let fixture: ComponentFixture<SuiviPrestatairePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviPrestatairePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviPrestatairePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
