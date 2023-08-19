import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  @Input() fontColor!: any;
  contactForm!: FormGroup;
  loading = false;

  constructor(
    private translateService: TranslateService,
    private appService: AppService
  ) { }

  ngOnInit() {
    this.initContactForm();
  }

  get currentLang(): string {
    return this.translateService.getDefaultLang();
  }

  initContactForm() {
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
    })
  }

  createContact() {
    console.log(this.contactForm.value);
    if (this.contactForm.valid) {
      this.loading = true;
      this.appService.createContact(this.contactForm.value).subscribe((res) => {
        if (res.status) {
          this.contactForm.reset();
        }
        this.loading = false;
      })
    }
  }
}
