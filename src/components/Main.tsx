import { useState, useEffect } from 'react'
import axios from 'axios'
import { format } from 'date-fns'

type Book = {
  image: string,
  title: string,
  author: string,
  description: string,
  genre: string,
  published: string,
}

export function Main(){
  const url = 'https://fakerapi.it/api/v1/books';
  const [books, setBooks] = useState<Book[]>([])

  useEffect(() => {
    axios.get(url).then(res => setBooks(res.data.data))
  }, []) 

  return(
    <div className='main'>
      {books.map(book => {

        let dateFormatted = format(new Date(book.published), 'dd MMM. yy')

        return(          
          <div className='book'>

            <div className='container-image'>
              <img src={book.image} alt="Book image" />
            </div>            

            <p className='name'>{book.title}</p>
            <p className='author'>{book.author}</p>
            <p className='description'>{book.description}</p>

            <div className='adicional-informations'>
              <span className='genre'>{book.genre}</span>
              <span className='published'>{dateFormatted}</span>
            </div>
            
          </div>  
        )
      })}
    </div>
  )
}