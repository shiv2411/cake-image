import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app-newsreg',
    templateUrl: './newsreg.component.html',
    styleUrls: ['./newsreg.component.css']
})

export class NewsregComponent implements OnInit {

  selectedFile :File=null;
    constructor(public http: HttpClient) {}
    ngOnInit() {}

    selectedImage(event){
      console.log(event)
        if(event.target.files.length>0){
         this.selectedFile=<File>event.target.files[0];
          
        }
    }
    
    Newsreg(form: NgForm) {
      const fd=new FormData();
      /*const payload = new HttpParams()
      .set('Heading', form.value.heading)
      .set('Subheading', form.value.subheading )
      .set('Text', form.value.content )
      .set('image', form.value.image);*/
      fd.append('Heading', form.value.heading)
      fd.append('Subheading', form.value.subheading )
      fd.append('Text', form.value.content )
      fd.append('image',this.selectedFile,this.selectedFile.name)


      this.http.post('http://localhost:3000/api/user/newsregister', fd).subscribe(() => {
            console.log('news runing');
          }, error => {
            console.log(error);
          });
    }

}
