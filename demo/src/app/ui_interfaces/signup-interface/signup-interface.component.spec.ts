import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupInterfaceComponent } from './signup-interface.component';

describe('SignupInterfaceComponent', () => {
  let component: SignupInterfaceComponent;
  let fixture: ComponentFixture<SignupInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
