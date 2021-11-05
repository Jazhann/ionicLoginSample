import { LoginPage } from './login.po';

describe('new App', () => {
  const login = new LoginPage();

  beforeEach(() => {
    login.load();
  });

  it('displays the login screen', () => {
    login.rootElement().isDisplayed()
    .then(data => {
      expect(data).toEqual(true);
    });
  });

  it('displays an error message if password is less than 5 characters', () => {
    login.enterEMail('johndoe@mail.com');
    login.enterPassword('1234');
    login.clickSignIn();
    login.waitForError();
    login.getErrorMessage()
    .then(error => {
      expect(error).toEqual(
        'Introduzca una contraseña mayor de 5 caracteres'
      );
    });
  });

  it('displays an error message if email is not a valid email ', () => {
    login.enterEMail('johndoemail.com');
    login.enterPassword('1234');
    login.clickSignIn();
    login.waitForError();
    login.getErrorMessage()
    .then(error => {
      expect(error).toEqual(
        'Introduzca un email válido'
      );
    });
  });
});
