import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../services/mock-data/mock-data.service';

@Component({
  selector: 'app-withdrawal-history',
  standalone: true,
  imports: [],
  templateUrl: './withdrawal-history.component.html',
  styleUrl: './withdrawal-history.component.scss',
})
export class WithdrawalHistoryComponent implements OnInit {
  withdrawals: any[] = [];

  constructor(private mockDataService: MockDataService) {}

  ngOnInit(): void {
    this.withdrawals = this.mockDataService.getWithdrawals();
  }
}
