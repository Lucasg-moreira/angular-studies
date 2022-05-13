export interface User {
  id: string;
  email: string;
  password: string;
}

export class Login {
  email: string;
  password!: string;

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
