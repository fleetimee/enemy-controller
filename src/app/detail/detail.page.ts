import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

import Swal from 'sweetalert2';


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
      Swal.fire({
        icon: 'error',
        title: 'Gagal!',
        text: 'Weather yang difavorit tidak boleh sama!',
      })
    } else {
      Swal.fire(
        'Sukses!',
        'Weather berhasil difavoritkan!',
        'success'
      )
      data.push(this.weather);
      localStorage.setItem('fav', JSON.stringify(data));
    }


  }
}