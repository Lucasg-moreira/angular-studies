import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDecoratorsComponent } from './input-decorators.component';

describe('InputDecoratorsComponent', () => {
  let component: InputDecoratorsComponent;
  let fixture: ComponentFixture<InputDecoratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputDecoratorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDecoratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
