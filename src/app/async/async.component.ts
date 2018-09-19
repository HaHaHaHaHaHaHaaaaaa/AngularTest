import { async } from '@angular/core/testing';

import { Component, OnInit } from '@angular/core';
// import * as async from 'async';
import { HttpClient } from '@angular/common/http';
import mapLimit from 'async/mapLimit';
import parallel from 'async/parallel';
import map from 'async/map';
@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.css']
})
export class AsyncComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const obj = { prod: 'http://localhost:3000/prod', dev: 'http://localhost:3000/dev', test: 'http://localhost:3000/test' };
    // async.forEachOf(obj, (value, key, callback) => {

    //   this.http.get(value).subscribe(res => {
    //     console.log(res);
    //   });
    // }, err => {
    //   if (err) {
    //     console.error(err.message);
    //   }
    // });


    // const urls = ['http://localhost:3000/prod', 'http://localhost:3000/dev', 'http://localhost:3000/test'];

    const urls = [];
    for (let i = 0; i < 12; i++) {
      urls.push(`http://datasource_${i + 1}`);
    }
    let concurrentCount = 0;
    function fetchUrl(url, callback) {
      concurrentCount++;
      console.log('当前http request' + url + 'response' + '_当前并发数量' + concurrentCount);
      setTimeout(() => {
        concurrentCount--;
        callback('当前http request' + url + 'response');
        console.log('==========================================');
      }, 2000);
    }

    mapLimit(urls, 3, async (url, callback) => {
      // const response = await this.http.get(url).toPromise();
      fetchUrl(url, (res) => {
        callback(null, res);
      });

      // return response;
    }, (err, results) => {
      if (err) {
        throw err;
      }
      console.log(results);
    });



    // map(urls, (url, callback) => {

    //   this.http.get(url).subscribe(res => {
    //     callback(null, res);
    //   });

    // }, function (err, results) {
    //   console.log(results);
    //   // results is now an array of stats for each file
    // });

    // parallel({
    //   one: function (callback) {
    //     setTimeout(function () {
    //       callback(null, 1);
    //     }, 2000);
    //   },
    //   two: function (callback) {
    //     setTimeout(function () {
    //       callback(null, 2);
    //     }, 4000);
    //   }
    // }, function (err, results) {
    //   console.log(results);
    //   // results is now equals to: {one: 1, two: 2}
    // });


    // parallel([
    //   function (callback) {
    //     setTimeout(function () {
    //       callback(null, 'one');
    //     }, 4000);
    //   },
    //   function (callback) {
    //     setTimeout(function () {
    //       callback(null, 'two');
    //     }, 100);
    //   }
    // ],
    //   // optional callback
    //   function (err, results) {
    //     console.log(results);
    //     // the results array will equal ['one','two'] even though
    //     // the second function had a shorter timeout.
    //   });
  }

}
