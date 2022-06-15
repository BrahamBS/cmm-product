import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeIterventionFormComponent } from './demande-itervention-form.component';

describe('DemandeIterventionFormComponent', () => {
  let component: DemandeIterventionFormComponent;
  let fixture: ComponentFixture<DemandeIterventionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeIterventionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeIterventionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
