import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiNavbarComponent } from './admi-navbar.component';

describe('AdmiNavbarComponent', () => {
  let component: AdmiNavbarComponent;
  let fixture: ComponentFixture<AdmiNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmiNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmiNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
