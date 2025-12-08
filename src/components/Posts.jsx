import React from 'react'
import Thumbnail1 from '../Images/blog1.jpg'
import Thumbnail2 from '../Images/blog2.jpg'
import Thumbnail3 from '../Images/blog3.jpg'
import Thumbnail4 from '../Images/blog4.jpg'
import PostItem from './PostItem'
import { useState } from 'react'


const  DUMMY_POSTS = [
    {
        id: '1',
        thumbnail: Thumbnail1,
        category: 'education',
        title: 'This is the title of the very first post on this blog.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolor',
        authorID: 3
    },

    {
        id: '2',
        thumbnail: Thumbnail2,
        category: 'science',
        title: 'This is the title of the very second post on this blog.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolor',
        authorID: 1
    },

    {
        id: '3',
        thumbnail: Thumbnail3,
        category: 'technology',
        title: 'This is the title of the very third post on this blog.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolor',
        authorID: 2
    },

    {
        id: '4',
        thumbnail: Thumbnail4,
        category: 'health',
        title: 'This is the title of the very fourth post on this blog.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolor',
        authorID: 4
    },

]

const Posts = () => {
    const [posts,setPosts] = useState(DUMMY_POSTS);
  return (
    <section className="posts">
        <div className="container post__container">
            {
            posts.map(({id, thumbnail, category, title, desc, authorID}) => <PostItem  key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={authorID}/>)
        }
        </div>
        
    </section>
    
  )
}

export default Posts

