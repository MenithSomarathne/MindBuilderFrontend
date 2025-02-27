import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-parent-dashboard',
  standalone: true,
  templateUrl: './parent-dashboard.component.html',
  styleUrls: ['./parent-dashboard.component.css']
})
export class ParentDashboardComponent implements AfterViewInit {
  public chart: any;
  public barChart: any;

  ngAfterViewInit() {
    this.renderLineChart();
    this.renderBarChart();
  }

  private renderLineChart() {
    this.chart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Sales',
            backgroundColor: '#42A5F5',
            borderColor: '#1E88E5',
            fill: false,
            data: [65, 59, 80, 81, 56]
          },
          {
            label: 'Revenue',
            backgroundColor: '#66BB6A',
            borderColor: '#43A047',
            fill: false,
            data: [28, 48, 40, 19, 86]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  private renderBarChart() {
    this.barChart = new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Assignments Completed',
            backgroundColor: '#42A5F5',
            data: [60, 75, 80, 90, 85]
          },
          {
            label: 'Quiz Scores',
            backgroundColor: '#66BB6A',
            data: [78, 82, 88, 85, 90]
          },
          {
            label: 'Attendance Rate',
            backgroundColor: '#FFA726',
            data: [95, 92, 98, 100, 97]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Percentage'
            }
          },
          x: {
            display: false
          }
        },
        plugins: {
          legend: {
            display: true,
            position: 'top'
          },
          tooltip: {
            enabled: true
          }
        }
      }
    });
  }
}
