import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // Arreglo que indica las rutas del app 
  rutas = [
    {
      name: 'Home',
      path: '/home'
    },
    {
      name: 'About',
      path: '/about'
    },
    {
      name: 'Contact',
      path: '/contact'
    },
    {
      name: 'Email',
      path: '/email'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
