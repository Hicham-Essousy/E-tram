import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAlimentationsComponent } from './my-alimentations.component';

describe('MyAlimentationsComponent', () => {
  let component: MyAlimentationsComponent;
  let fixture: ComponentFixture<MyAlimentationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyAlimentationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAlimentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
