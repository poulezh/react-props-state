import React from 'react';
import AppHeader from '../AppHeader/AppHeader';
import PostAddForm from '../PostAddForm/PostAddForm';
import PostList from '../PostList/PostList';
import PostStatusFilter from '../PostStatusFilter/PostStatusFilter';
import SearchPanel from '../SearchPanel/SearchPanel'

import './app.css'

const App = () => {

    //эмуляция прихода данных с сервера
    //сюда можно добавить рандомные ключи.чтобы реакт не обновлял все данные
    // а только измененные
    const data = [
        {label: 'Going to learn', important: true, id:'qwe'},
        {label: 'That is so good', important: false, id:'ewq'},
        {label: 'I need a break...', important: false,id:'asd'}

    ]

    return (
        <div className="app">
            <AppHeader />
            <div className="search-panel d-flex">
                <SearchPanel />
                <PostStatusFilter/>

            </div>
            <PostList posts={data}/>
            <PostAddForm/>

        </div>
    )
}

export default App