import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Chart from 'chart.js';

@Component({
selector: 'app-pie-chart',
templateUrl: './pie-chart.component.html',
styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

constructor() { }

ngOnInit() {
var ctx = document.getElementById('pieChart') as HTMLCanvasElement;
var pieChart = new Chart(ctx, {
type: 'pie',
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