import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail1 from '../Images/blog2.jpg'

const PostDetail = () => {
  return (
    <section className='post-detail'>
        <div className="container post-detail__container">
            <div className="post-detail__header">
              <PostAuthor />
              <div className="post-detail__buttons">
                <Link to={`/posts/werwer/edit`} className='btn sm primary'>Edit</Link>
                <Link to={`/posts/werwer/delete`} className='btn sm danger'>Delete</Link>
              </div>
            </div>
            <h1>This is post title</h1>
            
                <div className="post-detail__thumbnail">
                  <img src={Thumbnail1} alt="" />
                </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quaerat maiores dolorum voluptate earum rerum labore beatae libero. Saepe est inventore id animi reprehenderit, totam necessitatibus quam aspernatur repudiandae, natus dolorum repellendus deserunt quos excepturi asperiores? Esse debitis voluptatum rem autem quaerat eligendi qui sequi? Omnis error architecto illum vel mollitia maiores doloremque labore eligendi voluptatem ut deleniti harum quod, animi itaque expedita deserunt sint numquam? Numquam facilis repellendus explicabo eligendi temporibus, perferendis dolorum, sequi aspernatur, nulla fugiat ea eveniet laborum cumque blanditiis commodi ipsum officia nemo. Soluta, tempore consequatur? Fuga nobis, enim itaque sed officia atque molestias deleniti. Ratione magnam atque, officia exercitationem placeat suscipit nesciunt ipsum repudiandae eius nisi assumenda iste impedit dolorum itaque alias velit voluptatem at doloremque adipisci! Ullam nostrum </p>     
          
                   
        </div>
    </section>
  )
}

export default PostDetail