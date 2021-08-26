import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { Router } from '@angular/router';

@Component({
selector: 'app-bar-chart',
templateUrl: './bar-chart.component.html',
styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

constructor() { }

ngOnInit() {
var ctx = document.getElementById('barChart') as HTMLCanvasElement;
var barChart = new Chart(ctx, {
type: 'bar',
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