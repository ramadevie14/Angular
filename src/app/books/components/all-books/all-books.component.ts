import { Component } from '@angular/core';
import { BookModel } from '../../models/book.model';
import { BookService } from '../../services/book.service';
import { CounterService } from '../../../shared/services/counter.service';

@Component({
  selector: 'app-all-books',
  standalone: false,
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.css'
})
export class AllBooksComponent {

  public books:BookModel[]=[]

constructor(public bookService:BookService, public _counterService:CounterService) {
 
}
ngOnInit(){
  this.books=this.bookService.getBooks()
  console.log(this.books);
}
public increament(){
  this._counterService.incCounter();
}
public deccreament(){
  this._counterService.decCounter();
}

}
