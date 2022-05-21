import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiviTierPageComponent } from './suivi-tier-page.component';

describe('SuiviTierPageComponent', () => {
  let component: SuiviTierPageComponent;
  let fixture: ComponentFixture<SuiviTierPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiviTierPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiviTierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
