import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontLandpageComponent } from './front-landpage.component';

describe('FrontLandpageComponent', () => {
  let component: FrontLandpageComponent;
  let fixture: ComponentFixture<FrontLandpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontLandpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontLandpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
