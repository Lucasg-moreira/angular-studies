import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnstrapComponent } from './btnstrap.component';

describe('BtnstrapComponent', () => {
  let component: BtnstrapComponent;
  let fixture: ComponentFixture<BtnstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnstrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
