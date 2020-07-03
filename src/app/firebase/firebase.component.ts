import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireMessaging } from '@angular/fire/messaging';

import { AngularFireDatabase } from '@angular/fire/database';
import { mergeMapTo } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  name: string;
  weight: number;
  // tslint:disable-next-line:max-line-length
  constructor(public afAuth: AngularFireAuth, private storage: AngularFireStorage, private afMessaging: AngularFireMessaging, public db: AngularFireDatabase, private http: HttpClient) {

  }
  login() {
    this.afAuth.auth.signInWithEmailAndPassword('wbl@instreet.cn', '123456');

  }
  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
    this.listen();
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

  testpacejs() {
    this.http.get('http://www.NULL.com/api/openapi.json').subscribe(res => {
      console.log(res);

    });
  }

  adddbt() {
    const ref = this.db.database.ref('users/').push();
    ref.set({
      username: this.name,
      weight: this.weight
    }, (e) => {
      console.log(e, 'complete');

    });
    // this.db.database.ref('wbl').push({

    //   appid: '666666',
    //   name: 'flash123',
    //   version: '1.0.1'

    // }, (e) => {
    //   console.log(e, 'complete');

    // });

    // this.db.database.ref('test/-LQIWTsjHhZsWntte6DK/version').push({
    //   appid: '123456',
    //   name: 'flash',
    //   version: '1.0.0'
    // }, (e) => {
    //   console.log(e, 'complete');

    // });
  }

  qdbt() {
    // this.db.database.ref('users').once('value', (shot) => {
    //   console.log(shot.val());

    // });

    // console.log('new uid: ', uuid());

    // tslint:disable-next-line:max-line-length
    // this.db.database.ref('users').orderByChild('weight')/* .limitToLast(2) *//* .limitToFirst(2) */.once('value', (snapshot) => {
    //   console.log(snapshot.val());

    // });

    // this.db.database.ref('users').orderByChild('username').equalTo('wangbolin').once('value', (snap) => {
    //   console.log(snap.val());

    // });


    this.db.database.ref('users').orderByChild('weight').endAt(90)/* .startAt(121) */.once('value', (snap) => {
      console.log(snap.val());

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
