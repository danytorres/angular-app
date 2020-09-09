import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplitComponent } from './complit.component';

describe('ComplitComponent', () => {
  let component: ComplitComponent;
  let fixture: ComponentFixture<ComplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
