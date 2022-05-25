export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
}

export class Login {
  email?: string;
  password?: string;
}
