import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  weather: any;

  constructor(private route: ActivatedRoute, private router: Router, private alertControllerl: AlertController) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.weather = JSON.parse(params.special);
      }
    })
  }

  ngOnInit() {
  }

  async save() {
    localStorage.setItem('fav', JSON.stringify(this.weather));

    const alert = await this.alertControllerl.create({
      cssClass: 'my-custom-class',
      header: 'Success !',
      message: 'Berhasil difavoritkan <br> Silahkan cek tab Favorite',
      buttons: ['OK']
    });

    await alert.present();
  }



}
