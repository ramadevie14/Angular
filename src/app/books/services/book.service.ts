import { Injectable } from '@angular/core';
import { BookModel } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  public getBooks():BookModel[]{
    return [
      {
        "id": 1,
        "title": "Angular fundamentals",
        "totalPages": 453,
        "author": "Ram Singh",
        "price": {
          "currency":"INR",
          "value":199
        }
      },
      {
        "id": 2,
        "title": "Java fundamentals",
        "totalPages": 987,
        "author": "Kishan Pal",
        "price": {
          "currency":"USD",
          "value":19
        }
      },
      {
        "id": 3,
        "title": "Python fundamentals",
        "totalPages": 456,
        "author": "Jay Pal",
        "price": {
          "currency":"INR",
          "value":299
        }
      },
      {
        "id": 4,
        "title": "Azure fundamentals",
        "totalPages": 879,
        "author": "Pintu Verma",
        "price": {
          "currency":"INR",
          "value":399
        }
      },

    ]
  }
}
