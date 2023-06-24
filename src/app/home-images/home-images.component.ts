import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-images',
  templateUrl: './home-images.component.html',
  styleUrls: ['./home-images.component.scss']
})
export class HomeImagesComponent implements OnInit {
  @Input() images!: any[];
  
  constructor() { }

  ngOnInit() {
  }

}
