import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'LandingPage';
  data: any;
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.loadData()
  }

  loadData() {
    this.appService.getData().subscribe((res) => {
      this.data = res.data;
      console.log(res.data)
    })
  }
}
