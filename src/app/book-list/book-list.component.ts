import { Component } from '@angular/core';
//Select to select our elements from the store
import {Store, select} from '@ngrx/store'
//TO tez do ogarnięcia
import {Observable} from "rxjs";
import { Book } from '../models/book'
import { AddBook, RemoveBook} from "../books/book.actions";
import {AppState} from "../app.state";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  books$: Observable<Book[]>
  constructor(private store: Store<AppState>){
    this.books$ = store.pipe(select('book'))
  }

  addBook(id: string, title: string, author: string) {
    this.store.dispatch(AddBook({id,title,author}));
  }

  removeBook(bookId: string) {
    console.log(bookId)
    this.store.dispatch(RemoveBook({bookId}));
  }
}
