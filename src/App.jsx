import React, { useState } from 'react';
import NoPosts from './components/NoPosts';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import CsSelect from './components/UI/select/CsSelect';
import './styles/style.css';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript - 1', body: 'lorem spsumv omega tetra stu erusm' },
        { id: 2, title: 'JavaScript - 2', body: 'lorem spsumv omega tetra stu erusm' },
        { id: 3, title: 'JavaScript - 3', body: 'lorem spsumv omega tetra stu erusm' },
    ]);

    const [selectedSort, setSelectedSort] = useState('');

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
    };

    return (
        <div className='App'>
            <PostForm create={createPost} />
            <hr className='hr-line' />
            <CsSelect
                value={selectedSort}
                onChange={sortPosts}
                defaultValue='Sort by...'
                options={[
                    { value: 'title', name: 'By Title' },
                    { value: 'body', name: 'By Body' },
                ]}
            />
            {posts.length ? <PostList remove={removePost} posts={posts} title={'Posts List'} /> : <NoPosts />}
        </div>
    );
}

export default App;
