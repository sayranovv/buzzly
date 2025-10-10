import {inject, Injectable} from '@angular/core';
import {Router} from '@angular/router';

const TOKEN_KEY = 'auth-token'
const USER_KEY = 'auth-user'

@Injectable({
  providedIn: 'root'
})
export class TokenStorage {

  private router = inject(Router)

  saveToken(token: string): void {
    sessionStorage.setItem(TOKEN_KEY, token)
  }

  getToken(): string | null {
    return sessionStorage.getItem(TOKEN_KEY)
  }

  saveUser(user: unknown): void {
    sessionStorage.setItem(USER_KEY, JSON.stringify(user))
  }

  getUser<T = any>(): T | null {
    const user = sessionStorage.getItem(USER_KEY);
    return user ? (JSON.parse(user) as T) : null;
  }

  clear(): void {
    sessionStorage.clear()
  }

  async logOut(): Promise<void> {
    this.clear();
    await this.router.navigate(['/login']);
  }
}
