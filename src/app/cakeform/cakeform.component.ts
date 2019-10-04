import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { CakeformData } from './cakeform.model';
import { AngularFirestore } from '@angular/fire/firestore';
// import { FirebaseService } from '../angularfire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cakeform',
  templateUrl: './cakeform.component.html',
  styleUrls: ['./cakeform.component.css']
})
export class CakeformComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  // public cakedetails: Array<any> = [];

  ngOnInit() {}

  constructor(private formBuilder: FormBuilder,
              private fb: FormBuilder,
              public router: Router) {}


  processForm(form: NgForm) {
    if (form.valid) {
        const data: CakeformData = {
            size: form.value.size,
            spongetype: form.value.sponge,
            cream: form.value.cream,
            egg_or_eggless: form.value.egg,
            cake_filler: form.value.cakefiller,
            message: form.value.message,
            message_color: form.value.messagecolor,
            first_name: form.value.fullname,
            email_ID: form.value.email,
            mobile_number: form.value.mno
        };
        // this.firebaseService.addmessage(data).then(res => {
        //     form.reset();
        //   });
    }
    this.router.navigate(['/']);
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      alert('SUCCESS!! :-)');
  }
}
