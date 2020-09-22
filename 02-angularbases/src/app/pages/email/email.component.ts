import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  mensajes: any;

  constructor(private dataServices: DataService) { }

  ngOnInit(): void { // Momento en el que se carga la pagina
    this.mensajes = this.dataServices.getPosts();

      //.subscribe((posts: any[]) => {
        //this.mensajes = posts;
      //});
  }

}
