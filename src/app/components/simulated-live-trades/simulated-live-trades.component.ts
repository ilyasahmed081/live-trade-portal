import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../services/mock-data/mock-data.service';

@Component({
  selector: 'app-simulated-live-trades',
  standalone: true,
  imports: [],
  templateUrl: './simulated-live-trades.component.html',
  styleUrl: './simulated-live-trades.component.scss',
})
export class SimulatedLiveTradesComponent implements OnInit {
  liveTrades: any;

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.liveTrades = this.mockDataService.getLiveTrades();
    // Populate charts with this data
  }
}
