// IMPORTS
import React, { useState } from 'react';
import { createPost } from '../api';

// CONSTS
const Create = ({ posts, setPosts }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [price, setPrice] = useState('');
  const [willDeliver, setWillDeliver] = useState(false);
  const [location, setLocation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await createPost(title, body, price, willDeliver, location);
    console.log(data);
    setPosts([data.data.post, ...posts]);
  };

  // RENDERS new post form
  return (
    <>
      <h3>Submit a new post:</h3>
      <br></br>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='title:'
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <br></br>
        <input
          type='text'
          placeholder='body:'
          value={body}
          onChange={(event) => setBody(event.target.value)}
        ></input>
        <br></br>
        <input
          type='text'
          placeholder='price: 0.00'
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        ></input>
        <br></br>
        Delivery?
        <input
          type='checkbox'
          placeholder='delivery'
          ischecked={willDeliver}
          onChange={(event) => setWillDeliver(event.target.checked)}
        ></input>
        <br></br>
        <input
          type='text'
          placeholder='location:'
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        ></input>
        <br></br>
        <button type='submit' className='btn'>
          Submit
        </button>
      </form>
      <br></br>
    </>
  );
};

export default Create;
