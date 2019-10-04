// import { Injectable } from '@angular/core';
// import { AngularFirestore} from '@angular/fire/firestore';
// import { ActivatedRoute } from '@angular/router';


// @Injectable({ providedIn: 'root' })

// export class FirebaseService {
//   public fdata: Array<any> = [];

//   constructor(public db: AngularFirestore,
//               private fs: FirebaseService,
//               private route: ActivatedRoute ) {
//       db.collection('/cakeformdetails').valueChanges()
//         .subscribe(res => {
//           this.fdata = res.map(x => x);
//           // console.log(this.fdata);
//         });
//       }
//   addmessage(data) {
//     // console.log(data);
//     return new Promise<any>((resolve, reject) => {
//       this.db.collection('cakeformdetails')
//       .add(data)
//       .then(res => {}, err => reject(err));
//     });
//   }

// }
