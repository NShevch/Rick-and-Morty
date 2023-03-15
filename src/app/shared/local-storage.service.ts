import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export default class LocalStorageService {
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  get(key: string) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : undefined;
  }
  remove(key: string) {
    localStorage.removeItem(key);
  }
}
