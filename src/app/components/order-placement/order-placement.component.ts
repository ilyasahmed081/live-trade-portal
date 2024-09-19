import { Component, OnInit } from '@angular/core';
import { MockDataService } from '../../services/mock-data/mock-data.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-placement',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './order-placement.component.html',
  styleUrl: './order-placement.component.scss',
})
export class OrderPlacementComponent implements OnInit {
  availableAssets: string[];

  tradeForm: FormGroup;
  result: any = null;

  constructor(private mockDataService: MockDataService, private fb: FormBuilder, private router: Router) {
    this.availableAssets = this.mockDataService.getAvailableAssets();

    this.tradeForm = this.fb.group({
      asset: ['', Validators.required],
      tradeType: ['', Validators.required],
      lotSize: ['', [Validators.required, Validators.min(0.01)]],
      entryPrice: ['', [Validators.required, Validators.min(0)]],
      exitPrice: [null],
      stopLoss: [null],
      takeProfit: [null]
    });
  }

  ngOnInit(): void {
  }

  placeOrder(order: {
    asset: string;
    lotSize: number;
    stopLoss: number;
    takeProfit: number;
  }) {
    console.log('Order Placed:', order);
    return {
      message: 'Order placed successfully!',
      order: {
        asset: order.asset,
        lotSize: order.lotSize,
        stopLoss: order.stopLoss,
        takeProfit: order.takeProfit,
        status: 'Pending',
      },
    };
  }

  onSubmit() {
    if (this.tradeForm.valid) {
      const formValues = this.tradeForm.value;

      const order = {
        asset: formValues.asset,
        lotSize: formValues.lotSize,
        stopLoss: formValues.stopLoss || null,
        takeProfit: formValues.takeProfit || null
      };

      this.result = this.placeOrder(order);
      this.router.navigateByUrl('/live-trades');
    } else {
      console.log('Form is invalid');
    }
  }
}
