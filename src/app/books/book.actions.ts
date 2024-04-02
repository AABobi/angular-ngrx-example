import {createAction, props} from "@ngrx/store";
import { Book } from "../models/book"

export const AddBook = createAction('[Book] add book',props<Book>())
export const AddBookSuccess = createAction('[Book] add book successfully',props<Book>())
export const AddBookFailure = createAction('[Book] add book Failure',props<{error: any}>())


export const RemoveBook = createAction('[Book] Remove Book', props<{bookId: string}>());
