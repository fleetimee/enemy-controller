import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3', 
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  public fav;
  constructor() {
    this.fav = JSON.parse(localStorage.getItem('fav'));
  }

  delete() {
    if (localStorage.length > 0 ) {
    localStorage.clear();
    } 
  }

  doRefresh(event) {
    setTimeout(() => {
      this.fav = JSON.parse(localStorage.getItem('fav'));
      event.target.complete();
    }, 2000);
  }
}
