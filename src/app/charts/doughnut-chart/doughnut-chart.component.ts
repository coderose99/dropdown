import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
selector: 'app-doughnut-chart',
templateUrl: './doughnut-chart.component.html',
styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

constructor() { }

ngOnInit() {
var ctx = document.getElementById('doughnutChart') as HTMLCanvasElement;
var doughnutChart = new Chart(ctx, {
type: 'doughnut',
data: {
    labels: ['Orange', 'Blue', 'pink', 'black', 'Purple', 'Red'],
datasets: [{
label: '# of Votes',
data: [12, 19, 7, 8, 5, 10],
backgroundColor: [
    'orange',
    'blue',
    'pink',
    'black',
    'purple',
    'red'
    ],
    borderColor: [
        'orange',
        'blue',
        'pink',
        'black',
        'purple',
        'red'
    ],
borderWidth: 1
}]
},
options: {
animation: {
duration: 3000,
easing: 'easeInCubic',
},
scales: {
yAxes: [{
ticks: {
beginAtZero: true
}
}]
}
}
});
}

}