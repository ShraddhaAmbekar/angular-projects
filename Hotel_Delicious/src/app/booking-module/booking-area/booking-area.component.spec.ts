import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingAreaComponent } from './booking-area.component';

describe('BookingAreaComponent', () => {
  let component: BookingAreaComponent;
  let fixture: ComponentFixture<BookingAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingAreaComponent]
    });
    fixture = TestBed.createComponent(BookingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
