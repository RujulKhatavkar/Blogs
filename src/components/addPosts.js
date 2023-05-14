// addPost.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../redux/actions/blogsActions';

const AddPost = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      title,
      body,
    };

    addPost(newPost);

    // Clear the form
    setTitle('');
    setBody('');
  };

  return (
    <div className="custom">
        <h1 className="custom-heading">My Blogs</h1>
      <h2 className="custom-subheading">Add Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            placeholder="Content"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Add</button>
      </form>
    </div>
  );
};

export default connect(null, { addPost })(AddPost);
