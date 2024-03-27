import { ComponentFixture, TestBed } from '@angular/core/testing';

import { INFOComponent } from './info.component';

describe('INFOComponent', () => {
  let component: INFOComponent;
  let fixture: ComponentFixture<INFOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ INFOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(INFOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
