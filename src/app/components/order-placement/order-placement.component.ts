import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../services/mock-data/mock-data.service';

@Component({
  selector: 'app-order-placement',
  standalone: true,
  imports: [],
  templateUrl: './order-placement.component.html',
  styleUrl: './order-placement.component.scss',
})
export class OrderPlacementComponent implements OnInit {
  availableAssets: string[];
  asset: string = '';
  lotSize: number = 1;
  stopLoss: number = 0;
  takeProfit: number = 0;

  constructor(private mockDataService: MockDataService) {
    this.availableAssets = this.mockDataService.getAvailableAssets();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  placeOrder() {
    const order = {
      asset: this.asset,
      lotSize: this.lotSize,
      stopLoss: this.stopLoss,
      takeProfit: this.takeProfit,
    };
    const result = this.mockDataService.placeOrder(order);
    console.log(result.message);
  }
}
