import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerLoginSignupComponent } from './owner-login-signup.component';

describe('OwnerLoginSignupComponent', () => {
  let component: OwnerLoginSignupComponent;
  let fixture: ComponentFixture<OwnerLoginSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerLoginSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerLoginSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
