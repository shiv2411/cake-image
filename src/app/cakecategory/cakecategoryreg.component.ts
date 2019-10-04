import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-cakereg',
    templateUrl: './cakecategory.component.html',
    styleUrls: ['./cakecategory.component.css']
})

export class CakescategoryregComponent implements OnInit {

    constructor(public http: HttpClient) {}
    ngOnInit() {}

    Cakesreg(form: NgForm) {
        const payload = new HttpParams()
        .set('Category', form.value.category)
        .set('Name', form.value.name )
        .set('Price', form.value.price )
        .set('image', form.value.image);
        this.http.post('http://localhost:3000/api/user/cakesregister', payload).subscribe(() => {
            console.log('news runing');
          }, error => {
            console.log(error);
          });
    }

}
