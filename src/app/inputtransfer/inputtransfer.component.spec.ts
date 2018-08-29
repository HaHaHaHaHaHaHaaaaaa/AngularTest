import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputtransferComponent } from './inputtransfer.component';

describe('InputtransferComponent', () => {
  let component: InputtransferComponent;
  let fixture: ComponentFixture<InputtransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputtransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputtransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
