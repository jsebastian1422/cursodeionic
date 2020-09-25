import { Component, OnInit } from '@angular/core';
import { Interface } from 'readline';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: ComponentsMenu[] = [
    {
      icon: 'newspaper-outline',
      text: 'Action Sheet Page',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'notifications-outline',
      text: 'Alert Page',
      redirectTo: '/alert'
    },
    {
      icon: 'person-outline',
      text: 'Avatar Page',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-on-outline',
      text: 'Buttons Page',
      redirectTo: '/buttons'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

interface ComponentsMenu {
  icon: string;
  text: string;
  redirectTo: string;
}