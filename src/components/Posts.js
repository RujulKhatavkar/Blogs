import React, { useEffect ,useState} from 'react';

import { connect } from 'react-redux';

import { getPosts ,deletePost} from '../redux/actions/blogsActions';
import AddPost from "./addPosts"
import { Route, Routes } from "react-router-dom"
const Post = ({ getPosts, posts, loading, error,deletePost }) => {
  const [sortedPosts, setSortedPosts] = useState([...posts]);
  const [sortedByTitle, setSortedByTitle] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');


  useEffect(() => {
    getPosts();
  }, [getPosts]);
  useEffect(() => {
      setSortedPosts([...posts]);
    }, [posts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleDelete = (postId) => {
      deletePost(postId);
      console.log(postId)
    };
    const handleSort = () => {
  const sorted = [...posts].sort((a, b) =>
    a.title.localeCompare(b.title)

  );
  setSortedPosts(sorted);
  setSortedByTitle(true);
  console.log(sorted)

    console.log("posts")
  };
  const handleSearch = (e) => {
     setSearchTerm(e.target.value);
   };

   const filteredPosts = sortedByTitle ? sortedPosts : posts;
   const searchedAndFilteredPosts = filteredPosts.filter(
     (post) =>
       post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       post.body.toLowerCase().includes(searchTerm.toLowerCase())
   );
const sortedPostsToRender = sortedByTitle ? sortedPosts : posts;
  return (

    <div>
      <div className="custom">

      <h1 className="custom-subheading">Posts</h1>
      <div className="container1"><input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />

      </div>
      <button className="btn" onClick={handleSort}>Sort by Title</button></div>
<div className="card-container">
      {searchedAndFilteredPosts.map((post) => (
        <div class="card">
          <div key={post.id}>
            <h3 class="text-title">{post.title}</h3>
            <p class="text-body">{post.body}</p>
            <button class="card-button" onClick={() => handleDelete(post.id)}>Delete</button>
          </div>
            </div>
        ))}
</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps, { getPosts,deletePost })(Post);
