import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { NewsComponent } from '../news/news.component';

@Component({
    selector: 'app-admin',
    templateUrl: 'admin.component.html',
    styleUrls: ['admin.component.css']
})

export class AdminComponent implements OnInit {
    constructor(private http: HttpClient, public router: Router) { }

    ngOnInit() { }

    NewsRegister() {
        // this.http.get('http://localhost:3000/newsregister').subscribe(() => {
        //     console.log('news runing');
        //   }, error => {
        //     console.log(error);
        //   });
    }

    OffersRegister() {
        // this.http.get('http://localhost:3000/offersregister').subscribe(() => {
        //     console.log('news runing');
        //   }, error => {
        //     console.log(error);
        //   });
    }

    CakesRegister() {
        // this.http.get('http://localhost:3000/cakesregister').subscribe(() => {
        //     console.log('news runing');
        //   }, error => {
        //     console.log(error);
        //   });
    }
}
