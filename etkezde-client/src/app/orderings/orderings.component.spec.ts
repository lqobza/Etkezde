import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderingsComponent } from './orderings.component';

describe('OrderingsComponent', () => {
  let component: OrderingsComponent;
  let fixture: ComponentFixture<OrderingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
