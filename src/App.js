import React from 'react';
import Posts from './components/Posts';
import AddPost from "./components/addPosts"



const App = () => {
  return (
    <div>
    <AddPost/>
      <Posts />
    </div>
  );
};

export default App;
