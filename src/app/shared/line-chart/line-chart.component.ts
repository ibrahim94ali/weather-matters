import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart, ChartOptions } from 'chart.js';
import { colors } from 'src/app/shared/utils/colors';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas: ElementRef<HTMLCanvasElement>;

  chartData: LineChartData;
  @Input('chartData') set _chartData(chartData: LineChartData) {
    this.chartData = chartData;
    this.drawChart();
  }

  private chart: Chart;
  private type: string = 'line';

  options: ChartOptions = {
    spanGaps: true,
    responsive: true,
    legend: {
      display: false,
    },
    tooltips: {
      mode: 'nearest',
      intersect: false,
      displayColors: false,
      borderWidth: 1,
      borderColor: colors.primary,
      backgroundColor: colors.primary,
      titleFontFamily: "'Roboto', sans-serif",
      titleFontSize: 16,
      titleFontColor: 'white',
      bodyFontFamily: "'Roboto', sans-serif",
      bodyFontSize: 14,
      bodyFontColor: colors.white,
      bodyFontStyle: 500,
      bodySpacing: 4,
      xPadding: 12,
      yPadding: 12,
      callbacks: {
        label: (tooltipItem: any) => {
          return `${this.chartData.data[tooltipItem?.index]}°C`;
        },
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            fontColor: colors.gray,
            fontSize: 14,
            fontFamily: "'Roboto', sans-serif",
            fontStyle: 500,
            precision: 0,
            callback: (temp) => `${temp}°C`,
          },
          gridLines: {
            drawBorder: false,
            color: colors.lightGray,
            zeroLineWidth: 2,
            zeroLineColor: colors.lightGray,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            fontColor: colors.gray,
            fontSize: 14,
            fontFamily: "'Roboto', sans-serif",
            fontStyle: 500,
          },
          gridLines: {
            display: false,
            drawBorder: false,
          },
        },
      ],
    },
  };

  constructor() {}

  ngOnInit(): void {}

  updateChart(): void {
    if (!this.chartData) return;
    this.chart.data.datasets[0].data = this.chartData.data;
    this.chart.data.datasets[0].label = this.chartData.name;

    this.chart.data.labels = this.chartData.labels;
    this.chart.update(1000);
  }

  drawChart(): void {
    if (this.chart && this.canvas?.nativeElement) {
      this.updateChart();
    } else {
      this.chart = new Chart(this.canvas.nativeElement, {
        type: this.type,
        options: this.options,
        data: {
          datasets: [
            {
              data: [],
              fill: false,
              borderColor: colors.primary,
              backgroundColor: colors.white,
              borderWidth: 2,
            },
          ],
          labels: [],
        },
      });
    }
  }
}

export interface LineChartData {
  name: string;
  labels: string[];
  data: number[];
}
