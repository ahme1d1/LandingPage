import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  @Input() reviews!: any[];

  constructor(private translateService: TranslateService) {}

  get currentLang(): string {
    return this.translateService.getDefaultLang();
  }

  ngOnInit() {
    console.log(this.reviews)
  }

}
