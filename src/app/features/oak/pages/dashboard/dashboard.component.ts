import {Component, OnInit} from '@angular/core';
import { Chart } from '@antv/g2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  selectedValue = null;

  ngOnInit(): void {
    const data = [
      { month: 'Jan', city: 'Income', temperature: 7 },
      { month: 'Jan', city: 'Expenditure', temperature: 3.9 },
      { month: 'Feb', city: 'Income', temperature: 6.9 },
      { month: 'Feb', city: 'Expenditure', temperature: 4.2 },
      { month: 'Mar', city: 'Income', temperature: 9.5 },
      { month: 'Mar', city: 'Expenditure', temperature: 5.7 },
      { month: 'Apr', city: 'Income', temperature: 14.5 },
      { month: 'Apr', city: 'Expenditure', temperature: 8.5 },
      { month: 'May', city: 'Income', temperature: 18.4 },
      { month: 'May', city: 'Expenditure', temperature: 11.9 },
      { month: 'Jun', city: 'Income', temperature: 21.5 },
      { month: 'Jun', city: 'Expenditure', temperature: 15.2 },
      { month: 'Jul', city: 'Income', temperature: 25.2 },
      { month: 'Jul', city: 'Expenditure', temperature: 17 },
      { month: 'Aug', city: 'Income', temperature: 26.5 },
      { month: 'Aug', city: 'Expenditure', temperature: 16.6 },
      { month: 'Sep', city: 'Income', temperature: 23.3 },
      { month: 'Sep', city: 'Expenditure', temperature: 14.2 },
      { month: 'Oct', city: 'Income', temperature: 18.3 },
      { month: 'Oct', city: 'Expenditure', temperature: 10.3 },
      { month: 'Nov', city: 'Income', temperature: 13.9 },
      { month: 'Nov', city: 'Expenditure', temperature: 6.6 },
      { month: 'Dec', city: 'Income', temperature: 9.6 },
      { month: 'Dec', city: 'Expenditure', temperature: 4.8 },
    ];

    const chart = new Chart({
      container: 'income-graph',
      autoFit: true,
      height: 500,
      padding: 20
    });

    chart.data(data);
    chart.scale({
      month: {
        range: [0, 1],
      },
      temperature: {
        nice: true,
      },
    });

    chart.tooltip({
      showCrosshairs: true,
      shared: true,
    });

    chart.axis('temperature', {
      label: {
        formatter: (val) => {
          return val + ' °C';
        },
      },
    });

    chart
      .line()
      .position('month*temperature')
      .color('city')
      .shape('smooth');

    chart
      .point()
      .position('month*temperature')
      .color('city')
      .shape('circle');

    chart.theme({ "styleSheet": { "brandColor": "#A6D34D", "paletteQualitative10": ["#A6D34D", "#DADEE3", ], "paletteQualitative20": ["#DADEE3"] } });


    chart.render();
  }



}
