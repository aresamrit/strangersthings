// IMPORTS
import { useState, useEffect } from 'react';
import { fetchAllPosts, deletePost } from '../api';
import Create from './Create';

// CONSTS
const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const data = await fetchAllPosts();
      // console.log('datadatadata', data);
      setPosts(data.data.posts);
    };
    fetchPosts();
  }, []);

  const handleDelete = async (postIdToDelete) => {
    const data = await deletePost(postIdToDelete);
    console.log('data', data);
    const postsLeftOver = posts.filter((post) => post._id !== postIdToDelete);
    setPosts(postsLeftOver);
  };

  // RENDERS all posts
  return (
    <div className='post-preview'>
      <h1> Posts </h1>
      <br></br>
      <Create posts={posts} setPosts={setPosts} />
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <h2>{post.title}</h2>
            <p className='user'>Posted By: {post.author.username}</p>
            <p className='description'>{post.description}</p>
            <aside className='location'>Location: {post.location}</aside>
            <aside className='price'>Price: {post.price}</aside>
            <p className='delivery'>Delivery: {post.willDeliver}</p>
            <p className='updated'>Last Updated: {post.updatedAt}</p>
            {post.isAuthor ? (
              <button
                type='button'
                className='btn'
                onClick={() => handleDelete(post._id)}
              >
                Delete post
              </button>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
