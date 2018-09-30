import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StpRepHttpDirective } from './stp-rep-http.directive';
import { Test5Component } from './test5/test5.component';
import { Test6Component } from './test6/test6.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { wblToken } from './async/injectToken';

@NgModule({
  declarations: [
    AppComponent,
    StpRepHttpDirective,

  ],
  imports: [
    // tslint:disable-next-line:max-line-length
    BrowserModule, HttpClientModule, HttpClientJsonpModule, AppRoutingModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    { provide: wblToken, useFactory: () => 'http://localhost:3000' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
