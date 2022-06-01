import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadActualiteComponent } from './upload-actualite.component';

describe('UploadActualiteComponent', () => {
  let component: UploadActualiteComponent;
  let fixture: ComponentFixture<UploadActualiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadActualiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadActualiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
