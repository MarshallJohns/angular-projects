import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChangeColorService {
  constructor() {}
  randomColor() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  }
}
