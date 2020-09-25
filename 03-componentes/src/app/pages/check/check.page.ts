import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
})
export class CheckPage implements OnInit {

  data = [
    {
      name: 'primary',
      selected: true
    },
    {
      name: 'tertiary',
      selected: false
    },
    {
      name: 'warning',
      selected: true
    },
    {
      name: 'success',
      selected: false
    }
  ];
  constructor(private alertCtrl: AlertController ) { }

  ngOnInit() {
  }

  async onClick(item) {
    const alert = await this.alertCtrl.create({
      header: 'CheckBox Selected',
      subHeader: 'Ha seleccionado:',
      message: 'Tipo: ' + item.name + ' Selected: ' + item.selected,
      buttons: ['OK']
    });
    await alert.present();
  }

}
