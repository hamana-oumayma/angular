import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TG3Component } from './tg3.component';

describe('TG3Component', () => {
  let component: TG3Component;
  let fixture: ComponentFixture<TG3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TG3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TG3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
