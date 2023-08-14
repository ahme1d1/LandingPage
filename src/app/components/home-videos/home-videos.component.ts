import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-videos',
  templateUrl: './home-videos.component.html',
  styleUrls: ['./home-videos.component.scss']
})
export class HomeVideosComponent implements OnInit {
  @Input() videos!: any[];
  
  constructor() { }

  ngOnInit() {
  }

}
