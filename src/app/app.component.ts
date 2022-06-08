import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'assignment-chart';
  chartData: any[] = [
    {data: [], label: 'Profit'},
    {data: [], label: 'Sales'}
  ];
  chartLabels: any[] = [];
  chartOptions = {
    responsive: true,
  };
  chartColors: any = [
    {
      borderColor: 'red',
    },
    {
      borderColor: 'green',
    },
  ];
  chartLegend = true;
  chartPlugins = [];
  data: any[] = [];

  constructor(private http: HttpClient, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.http.get("assets/_files/data.json").subscribe(data =>{
        this.setChart(data);
    });
  }

  setChart(data: any) {
    this.data = data;
    this.data.forEach(l => {
      this.chartLabels.push(l.date);
      this.chartData[0].data.push(l.profit);
      this.chartData[1].data.push(l.sale);
    });

    this.cd.detectChanges();

  }
}


