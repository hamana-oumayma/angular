import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TG1Component } from './tg1.component';

describe('TG1Component', () => {
  let component: TG1Component;
  let fixture: ComponentFixture<TG1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TG1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TG1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
