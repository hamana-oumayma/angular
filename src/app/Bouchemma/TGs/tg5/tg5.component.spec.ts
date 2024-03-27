import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TG5Component } from './tg5.component';

describe('TG5Component', () => {
  let component: TG5Component;
  let fixture: ComponentFixture<TG5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TG5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TG5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
