import React, { useState, useEffect } from 'react';

const WordPressPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://example.com/wp-json/wp/v2/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>WordPress Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <a href={post.link}>{post.title.rendered}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordPressPosts;
