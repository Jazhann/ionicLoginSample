import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginCardComponent } from './login-card.component';

describe('LoginCardComponent', () => {
  let component: LoginCardComponent;
  let fixture: ComponentFixture<LoginCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCardComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set button styles', () => {
    expect(component.buttonStyles).toBeDefined();
  });

  it('should check form values and emit it', () => {
    component.email.setValue('johndoe@mail.com');
    component.password.setValue('123456');
    let credentials;
    component.credentials.subscribe( data => {
      credentials = data;
    });
    component.checkFormValues();
    expect(credentials).toEqual({
      email: 'johndoe@mail.com',
      password: '123456',
      remind: false
    });
  });

  it('should check form values and set error.password true', () => {
    component.email.setValue('johndoe@mail.com');
    component.password.setValue('1234');
    component.checkFormValues();
    expect(component.errors.password).toBeTrue();
  });

  it('should check form values and set error.email true', () => {
    component.email.setValue('johndoemail.com');
    component.password.setValue('123456');
    component.checkFormValues();
    expect(component.errors.email).toBeTrue();
  });
});
