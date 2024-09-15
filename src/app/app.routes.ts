import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { OrderPlacementComponent } from './components/order-placement/order-placement.component';

export const routes: Routes = [
    {
        path: '', 
        loadComponent: () => import('./components/homepage/homepage.component').then((c) => c.HomepageComponent),
    },
    {
        path: 'homepage', 
        loadComponent: () => import('./components/homepage/homepage.component').then((c) => c.HomepageComponent),
    },
    { 
        path: 'order-placement',
        loadComponent: () => import('./components/order-placement/order-placement.component').then((c) => c.OrderPlacementComponent),
    },
    { 
        path: 'previous-order-history',
        loadComponent: () => import('./components/previous-order-history/previous-order-history.component').then((c) => c.PreviousOrderHistoryComponent),
    },
    { 
        path: 'simulated-live-trades',
        loadComponent: () => import('./components/simulated-live-trades/simulated-live-trades.component').then((c) => c.SimulatedLiveTradesComponent),
    },
    { 
        path: 'withdrawal-history',
        loadComponent: () => import('./components/withdrawal-history/withdrawal-history.component').then((c) => c.WithdrawalHistoryComponent),
    },
];