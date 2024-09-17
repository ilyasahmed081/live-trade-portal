import { Component, OnChanges, OnInit } from '@angular/core';
import { MockDataService } from '../../services/mock-data/mock-data.service';
import { FormsModule, NgModel } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-previous-order-history',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './previous-order-history.component.html',
  styleUrl: './previous-order-history.component.scss',
})
export class PreviousOrderHistoryComponent implements OnInit {
  previousOrders: any[] = [];
  filteredOrders: any[] = [];
  searchTerm: string = '';

  constructor(
    private mockDataService: MockDataService
  ) { }

  ngOnInit(): void {
    this.previousOrders = this.mockDataService.getPreviousOrders();
    this.filteredOrders = this.previousOrders;
  }

  filterOrders() {
    if (!this.searchTerm) {
      this.filteredOrders = this.previousOrders;
    } else {
      this.filteredOrders = this.previousOrders.filter(order =>
        order.asset.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
