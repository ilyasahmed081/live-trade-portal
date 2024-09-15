import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatedLiveTradesComponent } from './simulated-live-trades.component';

describe('SimulatedLiveTradesComponent', () => {
  let component: SimulatedLiveTradesComponent;
  let fixture: ComponentFixture<SimulatedLiveTradesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimulatedLiveTradesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimulatedLiveTradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
