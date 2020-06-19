import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

import Swal from 'sweetalert2';

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
    Swal.fire({
      icon: 'error',
      title: 'Gagal delete!',
      text: 'Favorit masih kosong silahkan tambah lewat forecast!',
      confirmButtonColor: '#d33',
    })
    if (localStorage.length > 0 ) {
      Swal.fire({
        title: 'Are you sure?',
        text: "Semua data di favorit akan terhapus!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#28a745',
        cancelButtonColor: '#d33', 
        confirmButtonText: 'Ya, delete aja',
        cancelButtonText: 'moh',
        reverseButtons: false
      }).then((result) => {
        if (result.value) {
          localStorage.clear();
          Swal.fire(
            {
              title: 'Berhasil dihapus',
              text: 'Semua data berhasil dihapus silakan pull untuk merefresh page.',
              icon: 'success',
              confirmButtonColor: '#28a745',
              cancelButtonColor: '#3085d6', 
            }
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          Swal.fire(
            {
              title: 'Dibatalkan',
              text: 'Gak jadi lurd :)',
              icon: 'error',
              confirmButtonColor: '#d33',
              cancelButtonColor: '#d33', 
            }
          )
        }
      })
    } 
  }

  doRefresh(event) {
    setTimeout(() => {
      this.fav = JSON.parse(localStorage.getItem('fav'));
      event.target.complete();
    }, 2000);
  }
}
