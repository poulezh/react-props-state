import React from 'react';
import './post-add-form.css'

const PostAddForm =() => {
    return (
        <form action="" className="bottom-panel d-flex">
            <input 
            type="text"
            placeholder='о чеи дкматет?'
            className='form-control new-post-label'
            />
            <button 
                className="btn btn-outline-secondary"
                type='submit'
                >Добвить</button>
        </form>
    )
}
export default PostAddForm;