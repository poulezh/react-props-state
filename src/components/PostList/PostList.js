import React from 'react';
import PostListItem from '../PostListItem/PostListItem'
import './post-list.css'

const PostList =({posts}) =>{

    const elements = posts.map((item) => {
        //вытаскиваю из обьекта id и остальное помещаю в itemProps
        //тогда заменяю key={item.id}на key={id}
        //<PostListItem {...item} на <PostListItem {...itemProps}
        const{id, ...itemProps} = item
        return (
            <li
            key={id} 
            className='list-group-item'>
               {/* <PostListItem
                    label={item.label} 
                    important={item.important}/> */}
                    <PostListItem {...itemProps} />
                    {/* в новом синтаксисе можно прописать так.спрэд*/}
            </li>
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}


        </ul>
    )
}
export default PostList;