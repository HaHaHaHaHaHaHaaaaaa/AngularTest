import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private storage: AngularFireStorage) {

  }
  login() {
    this.afAuth.auth.signInWithEmailAndPassword('wbl@instreet.cn', '123456');

  }
  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {

  }

  download() {
    const ref = this.storage.ref('Ad Set Template.csv');
    ref.getDownloadURL().subscribe(res => {
      console.log(res);

    });

  }


  fileSelected(ev) {
    const file = ev.target.files[0];

    const filePath = file.name;

    const task = this.storage.upload(filePath, file);
  }

}
