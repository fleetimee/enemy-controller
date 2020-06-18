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

    let data = [];

    let w = JSON.parse(localStorage.getItem('fav'));

    if (w != null) {
      for (let i=0; i<w.length; i++) {
        data.push(w[i]);
      }
    }

    const alert = await this.alertControllerl.create({
      cssClass: 'my-custom-class',
      header: 'Success !',
      message: 'Berhasil difavoritkan <br> Silahkan cek tab Favorite',
      buttons: ['OK']
    });

    await alert.present();
    
    data.push(this.weather);
    localStorage.setItem('fav', JSON.stringify(data));
  }
}