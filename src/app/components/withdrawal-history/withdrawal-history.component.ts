import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../services/mock-data/mock-data.service';
import { FormsModule, NgModel } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-withdrawal-history',
  standalone: true,
  imports: [FormsModule, NgFor],
  templateUrl: './withdrawal-history.component.html',
  styleUrl: './withdrawal-history.component.scss',
})
export class WithdrawalHistoryComponent implements OnInit {
  withdrawals: any[] = [];
  filteredOrders: any[] = [];
  searchTerm: string = '';

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.withdrawals = this.mockDataService.getWithdrawals();
    this.filteredOrders = this.withdrawals;
  }

  filterOrders() {
    if (!this.searchTerm) {
      this.filteredOrders = this.withdrawals;
    } else {
      this.filteredOrders = this.withdrawals.filter(order =>
        order.asset.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
