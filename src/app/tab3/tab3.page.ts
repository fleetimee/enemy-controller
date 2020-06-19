import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3', 
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public fav;
  constructor(public alertController: AlertController) {
    this.fav = JSON.parse(localStorage.getItem('fav'));
  }

  async delete() {
    if (localStorage.length > 0 ) {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Are you sure?',
        message: 'Jika klik skuy maka semua favorit akan hilang',
        buttons: [
          {
            text: 'Nope',
            role: 'cancel',
            cssClass: 'secondary',
            handler: (blah) => {
              
            }
          }, {
            text: 'Skuy',
            handler: () => {
              localStorage.clear();
            }
          }
        ]
      });
  
      await alert.present();
     
    } 
  }

  doRefresh(event) {
    setTimeout(() => {
      this.fav = JSON.parse(localStorage.getItem('fav'));
      event.target.complete();
    }, 2000);
  }
}
