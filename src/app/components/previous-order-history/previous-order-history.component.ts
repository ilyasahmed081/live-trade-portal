import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../services/mock-data/mock-data.service';

@Component({
  selector: 'app-previous-order-history',
  standalone: true,
  imports: [],
  templateUrl: './previous-order-history.component.html',
  styleUrl: './previous-order-history.component.scss',
})
export class PreviousOrderHistoryComponent implements OnInit {
  previousOrders: any[] = [];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.previousOrders = this.mockDataService.getPreviousOrders();
  }
}
