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
    if (localStorage.length > 0 ) {
      // const alert = await this.alertController.create({
      //   cssClass: 'my-custom-class',
      //   header: 'Are you sure?',
      //   message: 'Jika klik skuy maka semua favorit akan hilang',
      //   buttons: [
      //     {
      //       text: 'Nope',
      //       role: 'cancel',
      //       cssClass: 'secondary',
      //       handler: (blah) => {
              
      //       }
      //     }, {
      //       text: 'Skuy',
      //       handler: () => {
      //         localStorage.clear();
      //       }
      //     }
      //   ]
      // });
  
      // await alert.present();
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: true
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "Semua data di favorit akan terhapus!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ya, delete aja',
        cancelButtonText: 'moh',
        reverseButtons: false
      }).then((result) => {
        if (result.value) {
          localStorage.clear();
          swalWithBootstrapButtons.fire(
            'Berhasil dihapus',
            'Semua data berhasil dihapus silakan pull untuk merefresh page.',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Dibatalkan',
            'Gak jadi lurd :)',
            'error'
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
