export interface LoginRequest {
  username: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  bio?: string;
  password: string;
  confirmPassword: string;
}
