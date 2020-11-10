import React from 'react';
import PostListItem from '../PostListItem/PostListItem'
import { ListGroup } from 'reactstrap';
import './post-list.css'

const PostList =({posts, onDelete, onToggleImportant, onToggleLiked}) =>{

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
                    <PostListItem 
                        {...itemProps} 
                        onDelete ={() =>onDelete(id)}
                        onToggleImportant={() => onToggleImportant(id)}
                        onToggleLiked={() => onToggleLiked(id)}
                    />
            </li>
        )
    })

    return (
        <ListGroup className="app-list">
            {elements}


        </ListGroup>
    )
}
export default PostList;