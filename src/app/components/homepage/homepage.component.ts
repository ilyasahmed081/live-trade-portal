import { Component, OnDestroy, OnInit } from '@angular/core';
import { MockDataService } from '../../services/mock-data/mock-data.service';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit, OnDestroy {
  private chart: am4charts.XYChart | undefined;
  private withdrawalHistoryChart: am4charts.XYChart | undefined;

  constructor(private mockDataService: MockDataService) { }

  ngOnInit() {
    this.renderLiveTradesChart();
    this.renderWithdrawalHistoryChart();
  }

  renderLiveTradesChart() {
    const liveTradesData: any = this.mockDataService.getLiveTrades();

    // Convert live trades to chart-friendly format
    const chartData = Object.keys(liveTradesData).map((asset) => {
      return liveTradesData[asset].map((trade: any) => ({
        asset: asset,
        time: trade.time,
        price: trade.price,
      }));
    }).flat();

    // Create the chart
    let chart = am4core.create('chartdiv', am4charts.XYChart);
    chart.data = chartData;

    // Create time axis
    let timeAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    timeAxis.dataFields.category = 'time';
    timeAxis.title.text = 'Time';

    // Create price axis
    let priceAxis = chart.yAxes.push(new am4charts.ValueAxis());
    priceAxis.title.text = 'Price';

    // Create series for each asset
    Object.keys(liveTradesData).forEach((asset) => {
      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = 'price';
      series.dataFields.categoryX = 'time';
      series.name = asset;
      series.tooltipText = '{name}: [bold]{valueY}[/]';
    });

    // Add legend
    chart.legend = new am4charts.Legend();

    this.chart = chart;
  }

  renderWithdrawalHistoryChart() {
    const withdrawalData = this.mockDataService.getWithdrawals();

    let chart = am4core.create('withdrawalHistoryChartDiv', am4charts.XYChart);

    // Transform the data for the chart
    chart.data = withdrawalData.map((withdrawal) => ({
      asset: withdrawal.asset,
      date: withdrawal.date,
      amount: withdrawal.amount,
    }));

    // Create date axis
    let dateAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    dateAxis.dataFields.category = 'date';
    dateAxis.title.text = 'Date';

    // Create amount axis
    let amountAxis = chart.yAxes.push(new am4charts.ValueAxis());
    amountAxis.title.text = 'Amount';

    // Create series for each withdrawal
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = 'amount';
    series.dataFields.categoryX = 'date';
    series.name = 'Withdrawal Amount';
    series.columns.template.tooltipText = '{name}: [bold]{valueY}[/]';
    series.columns.template.fillOpacity = 0.8;

    let columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;

    // Add legend
    chart.legend = new am4charts.Legend();
    this.withdrawalHistoryChart = chart;
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
}