import React from 'react'
import { useState } from 'react'
import { DUMMY_POSTS } from '../data'
import PostItem from '../components/PostItem'

const CategoryPosts = () => {
    const [posts,setPosts] = useState(DUMMY_POSTS);
  return (
    <section>
        {posts.length > 0 ? <div className="container category__posts-container">
            {
            posts.map(({id, thumbnail, category, title, desc, authorID}) => <PostItem  key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={authorID}/>)
        }
        </div> : <h3>No posts found</h3>}
        
    </section>
  )
}

export default CategoryPosts