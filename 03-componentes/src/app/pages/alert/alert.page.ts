import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  message: string;
  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Alert Basic',
      subHeader: 'This is a alert basic with ionic',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secundary',
          handler: (blash) => {
            console.log('Your confirm cancel : blash');
          }
        },
        {
          text: 'Okay',
          cssClass: 'secundary',
          handler: () => {
            console.log('Your confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlertPrompt() {
    const input = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'Form name header!',
      message: 'Ingrese el nombre del encabezado.',
      inputs: [
        {
          name: 'txtNameHeader',
          type: 'text',
          placeholder: 'Ingrese Nombre Encabezado'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (data) => {
            this.message = data.txtNameHeader;
          }
        }
      ]
    });

    await input.present();
  }



}
