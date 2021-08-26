import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
selector: 'app-radar-chart',
templateUrl: './radar-chart.component.html',
styleUrls: ['./radar-chart.component.scss']
})
export class RadarChartComponent implements OnInit {

constructor() { }

ngOnInit() {
var ctx = document.getElementById('radarChart') as HTMLCanvasElement;
var radarChart = new Chart(ctx, {
type: 'radar',
data: {
    labels: ['Orange', 'Blue', 'pink', 'black', 'Purple', 'Red'],
datasets: [{
label: '# of Votes',
data: [12, 19, 7, 8, 5, 10],
backgroundColor: [
'blue',
],
borderColor: [
'black',
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