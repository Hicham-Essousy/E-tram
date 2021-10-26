import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigngestionComponent } from './signgestion.component';

describe('SigngestionComponent', () => {
  let component: SigngestionComponent;
  let fixture: ComponentFixture<SigngestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigngestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigngestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
