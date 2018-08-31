import { PromiseComponent } from './promise/promise.component';
import { AsyncComponent } from './async/async.component';
import { NgModule, } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Test1Component } from './test1/test1.component';
import { DtDirective } from './dt.directive';
import { Test3Component } from './test3/test3.component';
import { Test4Component } from './test4/test4.component';
import { BtnHttpDirective } from './btn-http.directive';

import { FormsModule } from '@angular/forms';
import { FuncComponent } from './func/func.component';
import { ProgressComponent } from './progress/progress.component';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';
import { SvgComponent } from './svg/svg.component';
import { SvgMumComponent } from './svg-mum/svg-mum.component';
import { Test5Component } from './test5/test5.component';
import { TinymceComponent } from './tinymce/tinymce.component';
import { EditorModule } from '@tinymce/tinymce-angular';
import { InputtransferComponent } from './inputtransfer/inputtransfer.component';
import { Test6Component } from './test6/test6.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'async',
    pathMatch: 'full',
  },
  {
    path: 'test1',
    component: Test1Component,
    data: {
      title: ''
    }
  },
  {
    path: 'test3/:name',
    component: Test3Component,
    data: {
      title: ''
    }
  },
  {
    path: 'test4',
    component: Test4Component,
    data: {
      title: ''
    }
  },
  {
    path: 'func',
    component: FuncComponent,
    data: {
      title: ''
    }
  },
  {
    path: 'progress',
    component: ProgressComponent,
    data: {
      title: ''
    }
  },
  {
    path: 'loadingbar',
    component: LoadingBarComponent,
    data: {
      title: ''
    }
  },
  {
    path: 'svg',
    component: SvgComponent,
    data: {
      title: ''
    }
  },
  {
    path: 'svgmum',
    component: SvgMumComponent,
    data: {
      title: ''
    }
  },
  {
    path: 'test5',
    component: Test5Component,
    data: {
      title: ''
    }
  },
  {
    path: 'tinymce',
    component: TinymceComponent,
    data: {
      title: ''
    }
  },
  {
    path: 'test6',
    component: Test6Component,
    data: {
      title: ''
    }
  },
  {
    path: 'async',
    component: AsyncComponent,
    data: {
      title: ''
    }
  },
  {
    path: 'promise',
    component: PromiseComponent,
    data: {
      title: ''
    }
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), CommonModule, FormsModule, EditorModule
  ],
  // tslint:disable-next-line:max-line-length
  declarations: [InputtransferComponent, SvgMumComponent, SvgComponent, Test1Component,
    DtDirective, Test3Component, Test4Component, BtnHttpDirective,
    FuncComponent, ProgressComponent, LoadingBarComponent,
    Test5Component, TinymceComponent, Test6Component, AsyncComponent,
    PromiseComponent

  ],
  exports: [RouterModule, InputtransferComponent]
})
export class AppRoutingModule { }
