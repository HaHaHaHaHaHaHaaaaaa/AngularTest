import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireMessaging } from '@angular/fire/messaging';

import { AngularFireDatabase } from '@angular/fire/database';
import { mergeMapTo } from 'rxjs/operators';
@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(public afAuth: AngularFireAuth, private storage: AngularFireStorage, private afMessaging: AngularFireMessaging, public db: AngularFireDatabase) {

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

  dbt() {

    this.db.database.ref().once('value', (snapshot) => {
      console.log(snapshot.val());

    });
  }


  fileSelected(ev) {
    const file = ev.target.files[0];

    const filePath = file.name;

    const task = this.storage.upload(filePath, file);
  }


  requestPermission() {
    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(
        (token) => { console.log('Permission granted! Save to the server!', token); },
        (error) => { console.error(error); },
      );
  }

  listen() {
    this.afMessaging.messages
      .subscribe((message) => { console.log(message); });
  }
}
