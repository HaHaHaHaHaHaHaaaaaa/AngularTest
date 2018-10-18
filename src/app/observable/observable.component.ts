import { HttpClient, JsonpClientBackend, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject, AsyncSubject, of, interval, zip } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { zipAll } from 'rxjs-compat/operator/zipAll';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  sub = new BehaviorSubject<string>(/* 'initial BehaviorSubject value' */undefined); // 传递最新的值，订阅立即收到最新值
  replaySub = new ReplaySubject<number>(2, 1000); // 能设置收到的前值的个数

  asynSub = new AsyncSubject<number>(); // 异步，一直等到complete后才会将value发送出去。
  constructor(private http: HttpClient, private jsonp: JsonpClientBackend) { }

  ngOnInit() {
    this.checkPosition();
    const a = 99;
    const b = String(99);
    const c = Number('12');
    console.log(a, b, c);
    // function identity<T>(arg: T): T {
    //   return arg;
    // }


    // this.testJSONP();


    // this.testSubJect();

    // this.testReplaySubject();

    // this.testAsyncSubject();

    this.testOperators();
  }

  testOperators() {
    const ob = of(1, 2, 3).pipe(map(x => x + 'test!!!!'));
    ob.subscribe(res => {
      console.log(res);

    });

    // RxJS v6+


    // 每1秒发出值
    const source = interval(1000);
    const source1 = interval(2000);
    // 当一个 observable 完成时，便不会再发出更多的值了
    const example = zip(source, source.pipe(take(2)));
    // 输出: [0,0]...[1,1]
    const subscribe = example.subscribe(val => console.log(val));


  }

  testAsyncSubject() {
    this.asynSub.subscribe(next => {
      console.log(`ob_A:${next}`);
    });

    this.asynSub.next(1);
    this.asynSub.next(11);
    this.asynSub.next(111);
    this.asynSub.next(1111);
    this.asynSub.next(11111);

    this.asynSub.subscribe(next => {
      console.log(`ob_B:${next}`);
    });

    // complete才会有值
    this.asynSub.next(111111111111);
    this.asynSub.complete();
  }
  testReplaySubject() {
    this.replaySub.subscribe(next => {
      console.log(next);

    });

    this.replaySub.next(1);
    setTimeout(() => {
      this.replaySub.next(2);
    }, 799);
    setTimeout(() => {
      this.replaySub.next(3);
      this.replaySub.next(4);
    }, 2000);

    // 订阅，返回2个前值 buffersize

    setTimeout(() => {
      this.replaySub.subscribe({
        next: v => {
          console.log(`repeat subscribe:${v}`);
        }
      });
    }, 1800);

  }

  testJSONP() {
    const params = 'callback=JSONP_CALLBACK';
    this.jsonp.handle(new HttpRequest('JSONP', 'http://localhost:3000/users/getinfo?' + params)).subscribe((res: HttpResponse<any>) => {
      console.log(res.body);
    });
  }

  testSubJect() {
    let count = 0;
    setTimeout(() => {
      count++;
      this.sub.next(`this is times: ${count}`);
    }, 1000);
    setTimeout(() => {
      count++;
      this.sub.next(`this is times: ${count}`);
    }, 1000);

    setTimeout(() => {
      this.sub.subscribe(next => {
        console.log(next);
      });
    }, 3000);

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
