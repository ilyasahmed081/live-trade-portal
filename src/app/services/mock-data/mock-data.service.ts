import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MockDataService {
  constructor() { }

  getPreviousOrders() {
    return [
      {
        asset: 'XAUUSD',
        date: '2024-09-01',
        entry: 1920,
        exit: 1930,
        lotSize: 1,
        pnl: 100,
        status: 'Closed',
      },
      {
        asset: 'SPX500',
        date: '2024-09-02',
        entry: 4500,
        exit: 4600,
        lotSize: 2,
        pnl: 200,
        status: 'Closed',
      },
      {
        asset: 'BTCUSD',
        date: '2024-09-03',
        entry: 26000,
        exit: 26500,
        lotSize: 0.5,
        pnl: 250,
        status: 'Closed',
      },
      {
        asset: 'XAUUSD',
        date: '2024-09-04',
        entry: 1930,
        exit: 1950,
        lotSize: 1.5,
        pnl: 300,
        status: 'Closed',
      },
      {
        asset: 'US30',
        date: '2024-09-05',
        entry: 34000,
        exit: 34500,
        lotSize: 1,
        pnl: 500,
        status: 'Closed',
      },
    ];
  }

  getWithdrawals() {
    return [
      {
        asset: 'XAUUSD',
        amount: 1000,
        date: '2024-09-01',
        status: 'Completed',
      },
      {
        asset: 'SPX500',
        amount: 2000,
        date: '2024-09-02',
        status: 'Pending',
      },
      {
        asset: 'BTCUSD',
        amount: 0.5,
        date: '2024-09-03',
        status: 'Completed',
      },
      {
        asset: 'US30',
        amount: 1500,
        date: '2024-09-04',
        status: 'Completed',
      },
      {
        asset: 'XAUUSD',
        amount: 2000,
        date: '2024-09-05',
        status: 'Pending',
      },
    ];
  }

  getLiveTrades() {
    return {
      XAUUSD: [
        { time: '10:00', price: 1920 },
        { time: '10:05', price: 1930 },
        { time: '10:10', price: 1940 },
        { time: '10:15', price: 1950 },
      ],
      SPX500: [
        { time: '10:00', price: 4500 },
        { time: '10:05', price: 4550 },
        { time: '10:10', price: 4600 },
        { time: '10:15', price: 4650 },
      ],
      BTCUSD: [
        { time: '10:00', price: 26000 },
        { time: '10:05', price: 26200 },
        { time: '10:10', price: 26500 },
        { time: '10:15', price: 26700 },
      ],
      US30: [
        { time: '10:00', price: 34000 },
        { time: '10:05', price: 34200 },
        { time: '10:10', price: 34500 },
        { time: '10:15', price: 34700 },
      ],
    };
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

  getAvailableAssets() {
    return ['XAUUSD', 'SPX500', 'BTCUSD', 'US30'];
  }
}
