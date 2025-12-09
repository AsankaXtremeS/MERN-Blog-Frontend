import Thumbnail1 from '../src/Images/blog1.jpg'
import Thumbnail2 from '../src/Images/blog2.jpg'
import Thumbnail3 from '../src/Images/blog3.jpg'
import Thumbnail4 from '../src/Images/blog4.jpg'
import Avatar1 from '../src/Images/avatar1.jpg'
import Avatar2 from '../src/Images/avatar2.jpg'
import Avatar3 from '../src/Images/avatar3.jpg'
import Avatar4 from '../src/Images/avatar4.jpg'
import Avatar5 from '../src/Images/avatar5.jpg'

export const  DUMMY_POSTS = [
    {
        id: '1',
        thumbnail: Thumbnail1,
        category: 'Education',
        title: 'This is the title of the very first post on this blog.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolor',
        authorID: 3
    },

    {
        id: '2',
        thumbnail: Thumbnail2,
        category: 'Science',
        title: 'This is the title of the very second post on this blog.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolor',
        authorID: 1
    },

    {
        id: '3',
        thumbnail: Thumbnail3,
        category: 'Technology',
        title: 'This is the title of the very third post on this blog.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolor',
        authorID: 2
    },

    {
        id: '4',
        thumbnail: Thumbnail4,
        category: 'Health',
        title: 'This is the title of the very fourth post on this blog.',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolor dolor',
        authorID: 4
    },

]



export const authorsData = [
{id: 1, avatar: Avatar1, name: 'Ernest Achiever', posts: 3},
{id: 2, avatar: Avatar2, name: 'Jane Doe', posts: 5},
{id: 3, avatar: Avatar3, name: 'Dramani Mahama', posts: 0},
{id: 4, avatar: Avatar4, name: 'Nana Addo', posts: 2},
{id: 5, avatar: Avatar5, name: 'Hajia Bintu', posts: 1}
]