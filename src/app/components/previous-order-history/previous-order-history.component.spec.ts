import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousOrderHistoryComponent } from './previous-order-history.component';

describe('PreviousOrderHistoryComponent', () => {
  let component: PreviousOrderHistoryComponent;
  let fixture: ComponentFixture<PreviousOrderHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviousOrderHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreviousOrderHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
