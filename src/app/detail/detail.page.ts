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

  save() {
    let data    = JSON.parse(localStorage.getItem('fav')) || [],
        isExist = data.findIndex((obj) => {
          // Disini semua keys akan di kompare untuk di validasi berdasarkan "keunikannya"
          return obj.date == this.weather.date && obj.temp == this.weather.temp; 
        }) != -1;
  
    if (isExist) {
      console.log("duplicate");
    } else {
      data.push(this.weather);
      localStorage.setItem('fav', JSON.stringify(data));
    }
  }
}