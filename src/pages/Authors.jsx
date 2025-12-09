import React from 'react'
import { authorsData } from '../data'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Authors = () => {
  const [authors,setAuthors] = useState(authorsData)
  return (
    <section className='authors'>
     {authors.length > 0 ? <div className="container authors__container">
      {
        authors.map(({id,avatar,name,posts}) =>{
          return <Link key={id} to={`/posts/users/${id}` } className='author'>
           <div className='author__avatar'>
              <img src={avatar} alt={`Image of ${name}`} />
           </div>
           <div className="author__info">
            <h4>{name}</h4>
            <p>{posts}</p>
           </div>
          </Link>
        })
      }
     </div> : <h3 className='center'>No authors found</h3>}
    </section>
  )
}

export default Authors