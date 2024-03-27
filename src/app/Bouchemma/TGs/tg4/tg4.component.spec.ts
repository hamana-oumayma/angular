import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TG4Component } from './tg4.component';

describe('TG4Component', () => {
  let component: TG4Component;
  let fixture: ComponentFixture<TG4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TG4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TG4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
