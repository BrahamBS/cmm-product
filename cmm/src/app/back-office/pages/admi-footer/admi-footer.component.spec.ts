import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiFooterComponent } from './admi-footer.component';

describe('AdmiFooterComponent', () => {
  let component: AdmiFooterComponent;
  let fixture: ComponentFixture<AdmiFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmiFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
