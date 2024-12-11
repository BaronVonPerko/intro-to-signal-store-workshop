import {Item} from '../models/item';
import {Injectable} from '@angular/core';

export const serverItems: Item[] = [
  { id: 1, name: 'Furby', price: 34.99, image: 'furby.png' },
  { id: 2, name: 'Nintendo 64', price: 199.99, image: 'n64.png' },
  { id: 3, name: 'Talkboy', price: 29.99, image: 'talkboy.jpg' },
  { id: 4, name: 'Crossfire', price: 19.99, image: 'crossfire.jpg' },
];

@Injectable({ providedIn: 'root' })
export class ApiService {
  load(): Promise<Item[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(serverItems);
      }, 2000);
    });
  }
}
