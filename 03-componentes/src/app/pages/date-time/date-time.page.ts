import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  birthDate: Date = new Date();
  customPickerOptions;
  customDate;
  constructor() { }

  ngOnInit() {
  }

  changeDte(event: any){
    console.log('ionChange', event.detail.value);
  }

}
