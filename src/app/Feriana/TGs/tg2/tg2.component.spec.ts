import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TG2Component } from './tg2.component';

describe('TG2Component', () => {
  let component: TG2Component;
  let fixture: ComponentFixture<TG2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TG2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TG2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
