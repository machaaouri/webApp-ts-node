import * as React from 'react';
import { useState, useEffect } from 'react';
import { get } from '../api';
import { Book } from '../../common/types';

export const Books = () => {

    const [books, setBooks] = useState<Book[]>([])

    useEffect(() => {
        get<Book[]>('/books').then(res => setBooks(res))
    },[])

    const renderBook = (book: Book) => {
        const {isbn, title, authors, status} = book

        return (
            <div className="card bg-light" key={isbn}>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{authors}</h6>
                    <span>{status}</span>
                </div>
            </div>
        ) 
    }

    return (
        <div className="books">
            {books.map(renderBook)}
        </div>
    )
}