import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontActualitePageComponent } from './front-actualite-page.component';

describe('FrontActualitePageComponent', () => {
  let component: FrontActualitePageComponent;
  let fixture: ComponentFixture<FrontActualitePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontActualitePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontActualitePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
