import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../services/mock-data/mock-data.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-simulated-live-trades',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './simulated-live-trades.component.html',
  styleUrl: './simulated-live-trades.component.scss',
})
export class SimulatedLiveTradesComponent implements OnInit {
  liveTrades: any = {};
  filteredTrades: any[] = [];
  searchTerm: string = '';


  constructor(private mockDataService: MockDataService) { }

  ngOnInit(): void {
    this.fetchLiveTrades();
  }

  fetchLiveTrades(): void {
    this.liveTrades = this.mockDataService.getLiveTrades();
    this.filteredTrades = this.flattenLiveTrades(this.liveTrades);
  }

  // Flatten the live trades object into an array for easier filtering
  flattenLiveTrades(liveTrades: any): any[] {
    let tradesArray = [];
    for (let asset in liveTrades) {
      tradesArray.push({
        asset: asset,
        trades: liveTrades[asset]
      });
    }
    return tradesArray;
  }

  // Filter trades based on the search term
  filterTrades(): void {
    if (!this.searchTerm) {
      this.filteredTrades = this.flattenLiveTrades(this.liveTrades);
    } else {
      this.filteredTrades = this.flattenLiveTrades(this.liveTrades).filter(trade =>
        trade.asset.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
