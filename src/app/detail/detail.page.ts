import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  weather: any;

  constructor(private route: ActivatedRoute, private router: Router, private alertControllerl: AlertController, public toastController: ToastController) { 
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.weather = JSON.parse(params.special);
      }
    })
  }

  ngOnInit() {
  }

  async save() {
    let data    = JSON.parse(localStorage.getItem('fav')) || [],
        isExist = data.findIndex((obj) => {
          // Disini semua keys akan di kompare untuk di validasi berdasarkan "keunikannya"
          return obj.date == this.weather.date && obj.temp == this.weather.temp; 
        }) != -1;
  
    if (isExist) {
      const alert = await this.alertControllerl.create({
        cssClass: 'my-custom-class',
        header: 'Error',
        message: 'Data tidak boleh duplikat.',
        buttons: ['OK']
      });
  
      await alert.present();
    } else {
      const toast = await this.toastController.create({
        message: 'Berhasil di favoritkan.',
        duration: 2000
      });
      toast.present();
      data.push(this.weather);
      localStorage.setItem('fav', JSON.stringify(data));
    }


  }
}