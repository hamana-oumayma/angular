import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutModalComponent } from './ajout-modal.component';

describe('AjoutModalComponent', () => {
  let component: AjoutModalComponent;
  let fixture: ComponentFixture<AjoutModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
