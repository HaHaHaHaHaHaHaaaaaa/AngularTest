import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgMumComponent } from './svg-mum.component';

describe('SvgMumComponent', () => {
  let component: SvgMumComponent;
  let fixture: ComponentFixture<SvgMumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgMumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgMumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
