export interface User {
  id: string;
  email: string;
  password: string;
}

export class Login {
  email?: string;
  password?: string;
}
