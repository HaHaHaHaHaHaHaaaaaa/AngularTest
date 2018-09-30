import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.checkPosition();
    const a = 99;
    const b = String(99);
    const c = Number('12');
    console.log(a, b, c);
    // function identity<T>(arg: T): T {
    //   return arg;
    // }
  }

  upload(file) {
    const fd = new FormData();
    fd.append('file', file);
    this.http.post('http://localhost:8080/testUploadFile', fd).subscribe(res => {

    });
  }


  checkPosition() {

    // This function runs when subscribe() is called
    function sequenceSubscriber(observer) {
      // synchronously deliver 1, 2, and 3, then complete
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();

      // unsubscribe function doesn't need to do anything in this
      // because values are delivered synchronously
      return { unsubscribe() { } };
    }

    // Create a new Observable that will deliver the above sequence
    const sequence = new Observable(sequenceSubscriber);

    // execute the Observable and print the result of each notification
    sequence.subscribe({
      next(num) { console.log(num); },
      complete() { console.log('Finished sequence'); }
    });

    // Logs:
    // 1
    // 2
    // 3
    // Finished sequence

  }

}
