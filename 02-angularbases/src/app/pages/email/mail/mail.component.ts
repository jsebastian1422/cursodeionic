import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  //  Propiedad que se obtiene
  @Input() mensaje;
  
  constructor() { }

  ngOnInit(): void {
  }

}
