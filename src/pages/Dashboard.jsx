import React, { useState } from 'react'
import {DUMMY_POSTS} from '../../src/data'
import {Link} from 'react-router-dom'

const Dashboard = () => {
  const [posts,setPosts]=useState(DUMMY_POSTS)
  return (
   <section className='dashboard'>
    {
      posts.length > 0 ? <div className='container dashboard__container'>
        {
          posts.map(post => {
            return <article key={post.id} className='dashboard__post'>
              <div className="dashboard__post-info">
                <div className="dashboard__post-thumbnail">
                  <img style={{borderRadius: 'var(--radius-2)'}} src={post.thumbnail} alt="" />
                </div>
                <h4>
                  {post.title}
                </h4>  
              </div>
              <div className="dashboard__post-actions">
              < Link to={`/post/${post.id}`} className="btn sm">View</Link>
              <Link to={`/post/${post.id}/edit`} className="btn sm primary">Edit</Link>   
              <Link to={`/post/${post.id}/delete`} className="btn sm danger">Delete</Link>
              </div>
            </article>
          })
        }
      </div>
      : <h2 className="center">You have no posts yet.</h2>
    }
   </section>
  )
}

export default Dashboard