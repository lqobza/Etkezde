import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealNewComponent } from './meal-new.component';

describe('MealNewComponent', () => {
  let component: MealNewComponent;
  let fixture: ComponentFixture<MealNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
