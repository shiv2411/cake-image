import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-offersreg',
    templateUrl: './offersreg.component.html',
    styleUrls: ['./offersreg.component.css']
})

export class OffersregComponent implements OnInit {

    constructor(public http: HttpClient) {}
    ngOnInit() {}

    Offersreg(form: NgForm) {
      const payload = new HttpParams()
      .set('Heading', form.value.heading)
      .set('Subheading', form.value.subheading )
      .set('Text', form.value.content )
      .set('image', form.value.image);
      this.http.post('http://localhost:3000/api/user/offersregister', payload).subscribe(() => {
            console.log('news runing');
          }, error => {
            console.log(error);
          });
    }

}
