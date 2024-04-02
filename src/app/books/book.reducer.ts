import {createReducer, on} from "@ngrx/store";
import { AddBook, RemoveBook,AddBookSuccess,AddBookFailure } from "./book.actions"
import { Book } from "../models/book"

//Reducer zawsze musi miec initial state
export const initialState: Array<Book> = []
export const BookReducer = createReducer(
  initialState,
  //one this ADDBOOK actions appears then ... do smth (action + current state (reduced by reducer) = new state)
  on(AddBook, (state) => {
    return state }),
  on(AddBookSuccess, (state, {id, title, author}) => [...state, {id, title, author}]),
  on(AddBookFailure, (state, {error}) => {
    console.log(error)
    return state
  }),

  on(RemoveBook, (state,{bookId}) => state.filter(book => book.id != bookId))
)
