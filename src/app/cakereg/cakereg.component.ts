import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-offersreg',
    templateUrl: './cakereg.component.html',
    styleUrls: ['./cakereg.component.css']
})

export class CakesregComponent implements OnInit {

    constructor(public http: HttpClient) {}
    ngOnInit() {}

    Offersreg(form: NgForm) {
        this.http.get('http://localhost:3000/api/user/cakeregister').subscribe(() => {
            console.log('news runing');
          }, error => {
            console.log(error);
          });
    }

}
